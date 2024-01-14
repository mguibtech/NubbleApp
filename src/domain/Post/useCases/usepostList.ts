import {Post, postService, usePaginatedList} from '@domain';
import {useEffect, useState} from 'react';

export function usePostList() {
  return usePaginatedList<Post>(postService.getList);
}
