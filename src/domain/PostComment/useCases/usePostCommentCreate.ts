import {useState} from 'react';
import {postCommentService} from '../postCommentService';
import {PostComment} from '../postComentTypes';

interface Options {
  onSuccess?: (data: PostComment) => void;
  onError?: (message: string) => void;
}

export function usePostCommentCreate(postId: number, options?: Options) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<boolean | null>(null);

  async function createComment(message: string) {
    try {
      setError(null);
      setLoading(true);
      const postComment = await postCommentService.create(postId, message);
      if (options?.onSuccess) {
        options.onSuccess(postComment);
      }
    } catch (er) {
      if (options?.onError) {
        options.onError('Erro ao criar o comentario');
      }
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
