import React, {useState} from 'react';

import {Box, Screen, Text, TextMessage} from '@components';
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
  const [message, setMessage] = useState('');

  const {bottom} = useAppSafeArea();

  function renderItem({item}: ListRenderItemInfo<PostComment>) {
    return <PostCommentItem postComment={item} />;
  }

  function onPressSend() {}

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
        <TextMessage
          value={message}
          onChangeText={setMessage}
          onPressSend={onPressSend}
          placeholder="Adicione um comentario"
        />
      </Box>
    </Screen>
  );
}
