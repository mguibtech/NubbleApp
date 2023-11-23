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
      <Text preset="paragraphLarge" style={{color: 'red'}}>
        Testando
      </Text>
    </SafeAreaView>
  );
}

export default App;
