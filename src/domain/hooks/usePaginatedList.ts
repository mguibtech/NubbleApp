import {Page} from '@types';
import {useEffect, useState} from 'react';

export function usePaginatedList<Data>(
  getList: (page: number) => Promise<Page<Data>>,
) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<boolean | null>(null);
  const [list, setList] = useState<Data[]>([]);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);

  async function fetchInitialData() {
    try {
      setError(null);
      setLoading(true);
      const {data, meta} = await getList(1);
      //TODO: VALIDAR ISSO DDEPOIS SE TEM MAIS PAGINA
      setList(data);
      if (meta.hasNextPage) {
        setPage(2);
        setHasNextPage(true);
      } else {
        setHasNextPage(false);
      }
    } catch (er) {
      console.log('ERROR? =>>>> ' + error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  async function fetchNexPage() {
    if (loading || !hasNextPage) {
      return;
    }
    try {
      setLoading(true);
      const {data, meta} = await getList(page);
      setList(prev => [...prev, ...data]);
      if (meta.hasNextPage) {
        setPage(prev => prev + 1);
      } else {
        setHasNextPage(false);
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchInitialData();
  }, []);

  return {
    list,
    error,
    loading,
    refresh: fetchInitialData,
    fetchNexPage,
  };
}
