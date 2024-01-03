import {Button, Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';
import React from 'react';

export function MyProfileScreen(props: AppTabScreenProps<'MyProfileScreen'>) {
  return (
    <Screen>
      <Text preset="headingLarge">My Profile Screen</Text>
      <Button title="MyProfileScreen" />
    </Screen>
  );
}
