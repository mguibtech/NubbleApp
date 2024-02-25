import React from 'react';
import {Pressable} from 'react-native';

import {Post} from '@domain';
import {useNavigation} from '@react-navigation/native';

import {Box, Text, ProfileAvatar} from '@components';
import {AppTabScreenProps} from '@routes';

type Props = Pick<Post, 'author'>;
export function PostHeader({author}: Props) {
  const navigation = useNavigation();

  function navigateTpProfile() {
    navigation.navigate('AppTabNavigator', {
      screen: 'ProfileScreen',
      params: {userId: author.id},
    });
  }

  return (
    <Pressable onPress={navigateTpProfile}>
      <Box flexDirection="row" alignItems="center" mb="s16">
        <ProfileAvatar imageURL={author.profileURL} />
        <Text ml="s12" semiBold preset="paragraphMedium">
          {author.userName}
        </Text>
      </Box>
    </Pressable>
  );
}
