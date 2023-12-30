import React from 'react';
import { Text, Button, Icon, Screen } from '@components';
import { AuthScreenProps } from 'src/routes/navigationType';


export function SuccessScreen({ navigation, route }: AuthScreenProps<'SuccessScreen'>) {
  function goBackToBegin() {
    // TODO: Create function of back to login
    navigation.goBack();
  }

  return (
    <Screen>
      <Icon {...route.params.icon} />
      <Text preset="headingLarge" bold mt="s24">
        {route.params.title}
      </Text>
      <Text preset="paragraphLarge" mt="s16">
        {route.params.description}
      </Text>
      <Button
        preset="primary"
        title="Voltar ao início"
        onPress={goBackToBegin}
        mt="s40"
      />
    </Screen>
  );
}
