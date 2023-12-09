/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Text} from './src/components/Text/Text';
import {Button} from './src/components/Button/Button';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Box} from './src/components/Box/Box';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Text preset="paragraphLarge" italic bold>
          Testando
        </Text>
        <Text preset="headingLarge">Fonte Padrao</Text>

        <Button
          preset="secondary"
          title="teste"
          mb="s10"
          loading
          marginHorizontal="s20"
        />

        <Button title="Primary" marginHorizontal="s20" />
        <Button preset="outline" title="Outline" marginHorizontal="s20" />
        <Button
          preset="outline"
          loading
          title="Outline"
          marginHorizontal="s20"
        />
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
