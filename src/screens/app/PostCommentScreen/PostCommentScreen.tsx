import {Box, Screen, Text} from '@components';
import {PostComment, usePostCommentList} from '@domain';
import {AppScreenProps} from '@routes';
import {FlatList, ListRenderItemInfo} from 'react-native';
import {PostCommentItem} from './components/PostCommentItem';

export function PostCommentScreen({
  route,
}: AppScreenProps<'PostCommentScreen'>) {
  const {list, fetchNexPage} = usePostCommentList(route.params.postId);
  console.log(list);

  function renderItem({item}: ListRenderItemInfo<PostComment>) {
    return <PostCommentItem postComment={item} />;
  }

  return (
    <Screen canGoBack title="Comentarios">
      <FlatList data={list} renderItem={renderItem} />
    </Screen>
  );
}
