import {Button, Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';
import React from 'react';

export function FavoriteScreen(props: AppTabScreenProps<'FavoriteScreen'>) {
  return (
    <Screen>
      <Text preset="headingLarge">Favorite Screen</Text>
      <Button title="Favorite Screen" />
    </Screen>
  );
}
