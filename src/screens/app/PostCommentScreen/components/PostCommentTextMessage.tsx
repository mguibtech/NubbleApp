import {TextMessage} from '@components';
import {usePostCommentCreate} from '@domain';
import React, {useState} from 'react';
import {Keyboard} from 'react-native';

interface Props {
  postId: number;
  onAddComment: () => void;
}

export function PostCommentTextMessage({postId, onAddComment}: Props) {
  const [message, setMessage] = useState('');
  const {createComment} = usePostCommentCreate(postId, {
    onSuccess: () => {
      setMessage('');
      Keyboard.dismiss();
      onAddComment();
    },
  });

  return (
    <TextMessage
      value={message}
      onChangeText={setMessage}
      onPressSend={createComment}
      placeholder="Adicione um comentario"
    />
  );
}
