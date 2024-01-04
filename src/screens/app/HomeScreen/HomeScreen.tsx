import React, {useEffect, useState} from 'react';
import {Box, Button, PostItem, Screen, Text} from '@components';
import {AppScreenProps, AppTabScreenProps} from '@routes';
import {Post, postService} from '@domain';
import {Dimensions, FlatList, Image, ListRenderItemInfo} from 'react-native';

export function HomeScreen({navigation}: AppTabScreenProps<'HomeScreen'>) {
  const [postList, setPostList] = useState<Post[]>([]);

  function goToSettings() {
    navigation.navigate('SettingsScreen');
  }

  function renderItem({item}: ListRenderItemInfo<Post>) {
    return <PostItem post={item} />;
  }

  useEffect(() => {
    postService.getList().then(list => setPostList(list));
  });

  return (
    <Screen>
      <FlatList
        data={postList}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </Screen>
  );
}
