import {Post, postService} from '@domain';
import {useEffect, useState} from 'react';

export function usePostList() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<boolean | null>(null);
  const [postList, setPostList] = useState<Post[]>([]);

  async function fetchData() {
    try {
      setError(null);
      setLoading(true);
      const list = await postService.getList();
      setPostList(list);
    } catch (er) {
      console.log('ERROR? =>>>> ' + error);
      setError(true);
    } finally {
      setLoading(false);
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
  };
}
