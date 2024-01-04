import {Box, Text} from '@components';
import {Post} from '@domain';
import {boxRestyleFunctions} from '@shopify/restyle';
import React from 'react';
import {Dimensions, Image} from 'react-native';
import {PostHeader} from './components/PostHeader';
import {PostImage} from './components/PostImage';

interface PostItemProps {
  post: Post;
}

export function PostItem({post}: PostItemProps) {
  return (
    <Box marginBottom="s24">
      <PostHeader author={post.author} />
      <PostImage imageURL={post.imageURL} />
    </Box>
  );
}
