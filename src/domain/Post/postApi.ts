import {MetaDataPageAPI, PageAPI, api} from '@api';
import {postListMock} from './postListMock';
import {Post, PostAPI} from './postTypes';

async function getList(): Promise<PageAPI<PostAPI>> {
  //TODO: simular um delay na API
  await new Promise(resolve => setTimeout(() => resolve(''), 2000));
  const response = await api.get<PageAPI<PostAPI>>('/user/post');
  return response.data;
}

export const postApi = {
  getList,
};
