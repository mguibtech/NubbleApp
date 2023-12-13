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
import {EyeOffIcon} from './src/assets/icons/EyeOffIcon';
import {EyeOnIcon} from './src/assets/icons/EyeOnIcon';
import {Icon} from './src/components/Icon/Icon';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Text preset="paragraphLarge" italic bold>
          Testando
        </Text>
        <Text preset="headingLarge">Fonte Padrao</Text>
        <Icon name="eyeOn" color="errorLight" size={40} />
        <Icon name="camera" color="errorLight" size={40} />
        <Icon name="message" color="errorLight" size={40} />
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
