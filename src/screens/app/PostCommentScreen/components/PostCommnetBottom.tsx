import {Text} from '@components';
import React from 'react';
import {Pressable} from 'react-native';

interface Props {
  fetchNexPage: () => void;
  hasNextPage: boolean;
}

export function PostCommnetBottom({fetchNexPage, hasNextPage}: Props) {
  if (hasNextPage) {
    return (
      <Pressable onPress={fetchNexPage}>
        <Text preset="paragraphSmall" color="primary" textAlign="center">
          Ver mais
        </Text>
      </Pressable>
    );
  }

  return null;
}
