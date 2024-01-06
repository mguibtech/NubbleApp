import {MetaDataPageAPI, PageAPI} from '@api';
import {postListMock} from './postListMock';
import {Post, PostAPI} from './postTypes';

async function getList(): Promise<PageAPI<PostAPI>> {
  let response = await fetch('http://localhost:3333/user/post', {
    method: 'GET',
    headers: {
      Authorization:
        'Bearer Mw.Nhl1mqkm9BJL4ORCEbtn1T9qcYV-3xFcS5OStzEvLjE3J5hb4EujK8AtWdfo',
    },
  });

  let data: PageAPI<PostAPI> = await response.json();

  return data;
}

export const postApi = {
  getList,
};
