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
import {HomeHeader} from './components/HomeHeader';
import {HomeEmpty} from './components/HomeEmpty';
import {err} from 'react-native-svg';

export function HomeScreen({navigation}: AppTabScreenProps<'HomeScreen'>) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<boolean | null>(null);
  const [postList, setPostList] = useState<Post[]>([]);

  function goToSettings() {
    navigation.navigate('SettingsScreen');
  }

  async function fetchData() {
    try {
      setError(null);
      setLoading(true);
      const list = await postService.getList();
      setPostList(list);
    } catch (er) {
      console.log('ERROR? =>>>> ' + error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  function renderItem({item}: ListRenderItemInfo<Post>) {
    return <PostItem post={item} />;
  }

  useEffect(() => {
    fetchData();
  }, []);

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
          <HomeEmpty refetch={fetchData} error={error} loading={loading} />
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
