import React from 'react';

import {userUserGetById} from '@domain';

import {ActivityIndicator, Box, ProfileAvatar, Screen, Text} from '@components';
import {AppScreenProps, AppTabScreenProps} from '@routes';

export function ProfileScreen({route}: AppTabScreenProps<'ProfileScreen'>) {
  const userId = route.params.userId;

  const {loading, error, user} = userUserGetById(userId);

  return (
    <Screen>
      {loading && <ActivityIndicator />}
      {error && <Text> error ao carregar perfil do usuário</Text>}
      {user && (
        <Box alignItems="center" mt="s24">
          <ProfileAvatar
            imageURL={user.profileUrl}
            size={64}
            borderRadius={24}
          />
          <Text preset="headingMedium" bold>
            {user.fullName}
          </Text>
          <Text>@{user.userName}</Text>
        </Box>
      )}
    </Screen>
  );
}
