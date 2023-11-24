/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text/Text';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <Text preset="paragraphLarge" italic bold>
        Testando
      </Text>
      <Text preset="paragraphLarge" bold>
        Fonte Padrao
      </Text>
    </SafeAreaView>
  );
}

export default App;
