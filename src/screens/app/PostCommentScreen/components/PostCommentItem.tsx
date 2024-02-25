import React from 'react';

import {Box, ProfileAvatar, Text} from '@components';
import {PostComment, postCommentService, usePostCommentRemove} from '@domain';
import {Alert, Pressable} from 'react-native';
import {useToastService} from '@services';

interface Props {
  postComment: PostComment;
  onRemoveComment: () => void;
  userId: number;
  postAuthorId: number;
}

export function PostCommentItem({
  postComment,
  onRemoveComment,
  userId,
  postAuthorId,
}: Props) {
  const {showToast} = useToastService();
  const {mutate} = usePostCommentRemove({
    onSuccess: () => {
      onRemoveComment();
      showToast({
        message: 'Comentario deletado',
        position: 'bottom',
      });
    },
  });

  const isAllowToDelete = postCommentService.isAllowToDelete(
    userId,
    postComment,
    postAuthorId,
  );

  function confirmRemove() {
    Alert.alert('Deseja excluir o comentario?', 'pressione confirmar', [
      {
        text: 'Confirmar',
        onPress: () => mutate({postCommentId: postComment.id}),
      },
      {
        text: 'Cancelar',
        style: 'cancel',
      },
    ]);
  }

  return (
    <Pressable disabled={!isAllowToDelete} onLongPress={confirmRemove}>
      <Box flexDirection="row" alignItems="center" mb="s16">
        <ProfileAvatar imageURL={postComment.author.profileURL} />
        <Box marginLeft="s12" flex={1}>
          <Text preset="paragraphSmall" bold>
            {postComment.author.userName}
          </Text>
          <Text preset="paragraphSmall" color="gray1">
            {postComment.message} - {postComment.createdAtRelative}
          </Text>
        </Box>
      </Box>
    </Pressable>
  );
}
