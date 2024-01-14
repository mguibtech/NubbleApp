import {Box, Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export function PostCommentScreen({
  route,
}: AppScreenProps<'PostCommentScreen'>) {
  return (
    <Screen canGoBack title="Comentarios">
      <Box>
        <Text>Tela de comentarios</Text>
      </Box>
    </Screen>
  );
}
