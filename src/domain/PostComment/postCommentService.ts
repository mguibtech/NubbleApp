import {Page} from '@types';
import {PostComment} from './postComentTypes';
import {postCommentApi} from './postCommentAPI';
import {apiAdapter} from '@api';
import {postCommentAdapter} from './postCommentAdapter';

const PER_PAGE = 9;

async function getList(
  postId: number,
  page: number,
): Promise<Page<PostComment>> {
  const postCommentPageAPI = await postCommentApi.getList(postId, {
    page,
    per_page: PER_PAGE,
  });

  // throw new Error('Erro de teste');
  // return [];

  return {
    data: postCommentPageAPI.data.map(postCommentAdapter.toPostComment),
    meta: apiAdapter.toMetaDataPage(postCommentPageAPI.meta),
  };
}

async function create(postId: number, message: string): Promise<PostComment> {
  const postCommentAPI = await postCommentApi.create(postId, message);

  return postCommentAdapter.toPostComment(postCommentAPI);
}

async function remove(postCommentId: number): Promise<string> {
  const response = await postCommentApi.remove(postCommentId);
  return response.message;
}

/**
 * @description user can delete the comment if is the post author or comment author
 *
 * @param userId the current session user id
 * @param postComment comment to be deleted
 * @param postAuthorId the id of the post author
 */
function isAllowToDelete(
  userId: number,
  postComment: PostComment,
  postAuthorId: number,
): boolean {
  if (postComment.author.id === userId) return true;

  if (postAuthorId === userId) return true;

  return false;
}

export const postCommentService = {
  getList,
  create,
  remove,
  isAllowToDelete,
};
