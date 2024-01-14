import React from 'react';

import {Box, Screen, Text} from '@components';
import {PostComment, usePostCommentList} from '@domain';
import {AppScreenProps} from '@routes';
import {FlatList, ListRenderItemInfo} from 'react-native';
import {PostCommentItem, PostCommnetBottom} from './components';
import {useAppSafeArea, useAppTheme} from '@hooks';

export function PostCommentScreen({
  route,
}: AppScreenProps<'PostCommentScreen'>) {
  const {list, fetchNexPage, hasNextPage} = usePostCommentList(
    route.params.postId,
  );

  const {bottom} = useAppSafeArea();

  function renderItem({item}: ListRenderItemInfo<PostComment>) {
    return <PostCommentItem postComment={item} />;
  }

  return (
    <Screen canGoBack title="Comentarios">
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
    </Screen>
  );
}
