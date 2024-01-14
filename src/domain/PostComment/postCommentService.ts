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

export const postCommentService = {
  getList,
};
