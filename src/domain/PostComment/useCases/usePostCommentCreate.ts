import {useState} from 'react';
import {postCommentService} from '../postCommentService';

export function usePostCommentCreate(postId: number) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<boolean | null>(null);

  async function createComment(message: string) {
    try {
      setError(null);
      setLoading(true);
    } catch (er) {
      setError(true);
    } finally {
      setLoading(false);
    }
    await postCommentService.create(postId, message);
  }

  return {
    createComment,
  };
}
