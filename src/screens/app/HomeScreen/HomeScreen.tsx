import {Button, Screen, Text} from '@components';
import {AppScreenProps, AppTabScreenProps} from '@routes';
import React from 'react';

export function HomeScreen({navigation}: AppTabScreenProps<'HomeScreen'>) {
  function goToSettings() {
    navigation.navigate('SettingsScreen');
  }

  return (
    <Screen>
      <Text preset="headingLarge">Home Screen</Text>
      <Button title="Settings" onPress={goToSettings} />
    </Screen>
  );
}
