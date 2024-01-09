import {Post, postService} from '@domain';
import {useEffect, useState} from 'react';

export function usePostList() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<boolean | null>(null);
  const [postList, setPostList] = useState<Post[]>([]);
  const [page, setPage] = useState(1);

  async function fetchData() {
    try {
      setError(null);
      setLoading(true);
      const list = await postService.getList(page);
      setPage(prev => prev + 1);
      setPostList(prev => [...prev, ...list]);
    } catch (er) {
      console.log('ERROR? =>>>> ' + error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  function fetchNexPage() {
    if (!loading) {
      fetchData();
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return {
    postList,
    error,
    loading,
    refetch: fetchData,
    fetchNexPage,
  };
}
