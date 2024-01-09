import {Post, postService} from '@domain';
import {useEffect, useState} from 'react';

export function usePostList() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<boolean | null>(null);
  const [postList, setPostList] = useState<Post[]>([]);
  const [page, setPage] = useState(1);

  async function fetchInitialData() {
    try {
      setError(null);
      setLoading(true);
      const list = await postService.getList(1);
      //TODO: VALIDAR ISSO DDEPOIS SE TEM MAIS PAGINA
      setPage(2);
      setPostList(list);
    } catch (er) {
      console.log('ERROR? =>>>> ' + error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  async function fetchNexPage() {
    if (loading) return;
    try {
      setLoading(true);
      const list = await postService.getList(page);
      setPostList(prev => [...prev, ...list]);
      setPage(prev => prev + 1);
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
    postList,
    error,
    loading,
    refresh: fetchInitialData,
    fetchNexPage,
  };
}
