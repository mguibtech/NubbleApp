import React, {useState} from 'react';

import {Box, Screen, Text, TextMessage} from '@components';
import {PostComment, usePostCommentCreate, usePostCommentList} from '@domain';
import {AppScreenProps} from '@routes';
import {FlatList, ListRenderItemInfo} from 'react-native';
import {
  PostCommentItem,
  PostCommentTextMessage,
  PostCommnetBottom,
} from './components';
import {useAppSafeArea, useAppTheme} from '@hooks';

export function PostCommentScreen({
  route,
}: AppScreenProps<'PostCommentScreen'>) {
  const postId = route.params.postId;
  const {list, fetchNexPage, hasNextPage} = usePostCommentList(postId);

  const {bottom} = useAppSafeArea();

  function renderItem({item}: ListRenderItemInfo<PostComment>) {
    return <PostCommentItem postComment={item} />;
  }

  return (
    <Screen canGoBack title="Comentarios" flex={1}>
      <Box flex={1} justifyContent="space-between">
        <FlatList
          data={list}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          ListFooterComponent={
            <PostCommnetBottom
              fetchNexPage={fetchNexPage}
              hasNextPage={hasNextPage}
            />
          }
          ListFooterComponentStyle={{marginBottom: 20}}
          contentContainerStyle={{paddingBottom: bottom}}
        />
        <PostCommentTextMessage postId={postId} />
      </Box>
    </Screen>
  );
}
