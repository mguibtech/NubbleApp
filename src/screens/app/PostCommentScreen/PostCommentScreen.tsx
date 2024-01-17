import React, {useState} from 'react';

import {Box, Screen, Text, TextMessage} from '@components';
import {
  PostComment,
  usePostCommentCreate,
  usePostCommentList,
  userUser,
} from '@domain';
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
  const postAuthorId = route.params.postAuthorId;

  const {list, fetchNexPage, hasNextPage, refresh} = usePostCommentList(postId);
  const {id} = userUser();

  const {bottom} = useAppSafeArea();

  function renderItem({item}: ListRenderItemInfo<PostComment>) {
    return (
      <PostCommentItem
        postComment={item}
        onRemoveComment={refresh}
        userId={id}
        key={id.toString()}
        postAuthorId={postAuthorId}
      />
    );
  }

  return (
    <Screen canGoBack title="Comentarios" flex={1}>
      <Box flex={1} justifyContent="space-between">
        <FlatList
          data={list}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
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
        <PostCommentTextMessage postId={postId} onAddComment={refresh} />
      </Box>
    </Screen>
  );
}
