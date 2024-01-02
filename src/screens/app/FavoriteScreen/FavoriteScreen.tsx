import {Button, Screen, Text} from '@components';
import React from 'react';

export function FavoriteScreen() {
  return (
    <Screen>
      <Text preset="headingLarge">Favorite Screen</Text>
      <Button title="Favorite Screen" />
    </Screen>
  );
}
