import {Box, Text} from '@components';
import {Post} from '@domain';
import {boxRestyleFunctions} from '@shopify/restyle';
import React from 'react';
import {Dimensions, Image} from 'react-native';
import {PostHeader} from './components/PostHeader';
import {PostImage} from './components/PostImage';
import {PostActions} from './components/PostActions';
import {PostBottom} from './components/PostBottom';

interface PostItemProps {
  post: Post;
}

export function PostItem({post}: PostItemProps) {
  return (
    <Box marginBottom="s24" paddingHorizontal="s24" key={post.id}>
      <PostHeader author={post.author} />
      <PostImage imageURL={post.imageURL} />
      <PostActions
        commentCount={post.commentCount}
        favoriteCount={post.favoriteCount}
        reactionCount={post.reactionCount}
      />
      <PostBottom
        commentCount={post.commentCount}
        author={post.author}
        text={post.text}
      />
    </Box>
  );
}
