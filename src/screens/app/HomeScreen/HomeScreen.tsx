import React, {useEffect, useState} from 'react';
import {PostItem, Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';
import {Post, usePostList} from '@domain';
import {
  Dimensions,
  FlatList,
  Image,
  ListRenderItemInfo,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {HomeHeader} from './components/HomeHeader';
import {HomeEmpty} from './components/HomeEmpty';
import {err} from 'react-native-svg';

export function HomeScreen({navigation}: AppTabScreenProps<'HomeScreen'>) {
  const {postList, error, loading, refetch} = usePostList();

  function goToSettings() {
    navigation.navigate('SettingsScreen');
  }

  function renderItem({item}: ListRenderItemInfo<Post>) {
    return <PostItem post={item} />;
  }

  return (
    <Screen style={$screen}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={postList}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={{flex: postList.length === 0 ? 1 : 0}}
        ListHeaderComponent={<HomeHeader />}
        ListEmptyComponent={
          <HomeEmpty refetch={refetch} error={error} loading={loading} />
        }
      />
    </Screen>
  );
}

const $screen: StyleProp<ViewStyle> = {
  paddingTop: 0,
  paddingBottom: 0,
  paddingHorizontal: 0,
  flex: 1,
};
