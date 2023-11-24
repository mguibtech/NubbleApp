import React from 'react';
import {
  ActivityIndicator,
  Button as RNButton,
  TouchableOpacity,
} from 'react-native';
import {Text} from '../Text/Text';
import {useTheme} from '@shopify/restyle';
import {Theme} from '../../theme/theme';
import {Box, TouchableOpacityBox} from '../Box/Box';

interface ButtonProps {
  title: string;
  loading?: boolean;
}

export function Button({title, loading}: ButtonProps) {
  return (
    <TouchableOpacityBox
      backgroundColor="buttonPrimary"
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="s16"
      paddingHorizontal="s20">
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text style={{color: 'white'}} preset="paragraphMedium" bold>
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}