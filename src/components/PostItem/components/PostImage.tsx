import {Post} from '@domain';
import React from 'react';
import {Dimensions, Image} from 'react-native';

type Props = Pick<Post, 'imageURL'>;

export function PostImage({imageURL}: Props) {
  return (
    <Image
      source={{uri: imageURL}}
      resizeMode="cover"
      style={{
        width: Dimensions.get('screen').width,
        height: 300,
        marginHorizontal: -24,
      }}
    />
  );
}
