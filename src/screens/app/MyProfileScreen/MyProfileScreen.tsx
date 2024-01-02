import {Button, Screen, Text} from '@components';
import React from 'react';

export function MyProfileScreen() {
  return (
    <Screen>
      <Text preset="headingLarge">My Profile Screen</Text>
      <Button title="MyProfileScreen" />
    </Screen>
  );
}
