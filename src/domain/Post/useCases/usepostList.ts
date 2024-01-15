import {Post, postService} from '@domain';
import {usePaginatedList} from '@infra';
import {useEffect, useState} from 'react';

export function usePostList() {
  return usePaginatedList<Post>(postService.getList);
}
