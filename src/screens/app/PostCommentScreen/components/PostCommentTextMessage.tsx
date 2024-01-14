import {TextMessage} from '@components';
import {usePostCommentCreate} from '@domain';
import React, {useState} from 'react';
import {Keyboard} from 'react-native';

interface Props {
  postId: number;
}

export function PostCommentTextMessage({postId}: Props) {
  const [message, setMessage] = useState('');
  const {createComment} = usePostCommentCreate(postId);

  async function onPressSend() {
    await createComment(message);
    setMessage('');
    Keyboard.dismiss();
  }
  return (
    <TextMessage
      value={message}
      onChangeText={setMessage}
      onPressSend={onPressSend}
      placeholder="Adicione um comentario"
    />
  );
}
