import {Box, Screen, Text} from '@components';
import {usePostCommentList} from '@domain';
import {AppScreenProps} from '@routes';

export function PostCommentScreen({
  route,
}: AppScreenProps<'PostCommentScreen'>) {
  const {list} = usePostCommentList(route.params.postId);
  console.log(list);

  return (
    <Screen canGoBack title="Comentarios">
      <Box>
        <Text>Tela de comentarios</Text>
      </Box>
    </Screen>
  );
}
