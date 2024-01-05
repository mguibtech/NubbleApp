import React, {useEffect, useState} from 'react';
import {Box, Button, PostItem, Screen, Text} from '@components';
import {AppScreenProps, AppTabScreenProps} from '@routes';
import {Post, postService} from '@domain';
import {
  Dimensions,
  FlatList,
  Image,
  ListRenderItemInfo,
  StyleProp,
  ViewStyle,
} from 'react-native';

export function HomeScreen({navigation}: AppTabScreenProps<'HomeScreen'>) {
  const [postList, setPostList] = useState<Post[]>([]);

  function goToSettings() {
    navigation.navigate('SettingsScreen');
  }

  function renderItem({item}: ListRenderItemInfo<Post>) {
    return <PostItem key={item.id} post={item} />;
  }

  useEffect(() => {
    postService.getList().then(list => setPostList(list));
  });

  return (
    <Screen style={$screen}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={postList}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </Screen>
  );
}

const $screen: StyleProp<ViewStyle> = {
  paddingTop: 0,
  paddingBottom: 0,
  paddingHorizontal: 0,
};
