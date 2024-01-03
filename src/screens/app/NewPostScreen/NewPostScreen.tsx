import {Button, Screen, Text} from '@components';
import {AppScreenProps, AppTabScreenProps} from '@routes';
import React from 'react';

export function NewPostScreen(props: AppTabScreenProps<'NewPostScreen'>) {
  return (
    <Screen canGoBack>
      <Text preset="headingSmall">New Post Screen</Text>
    </Screen>
  );
}
