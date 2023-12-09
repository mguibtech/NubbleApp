import React from 'react';
import {
  ActivityIndicator,
  Button as RNButton,
  TouchableOpacity,
} from 'react-native';
import {Text} from '../Text/Text';
import {useTheme} from '@shopify/restyle';
import {Theme, ThemeColors} from '../../theme/theme';
import {Box, TouchableOpacityBox, TouchableOpacityBoxProps} from '../Box/Box';
import {buttonPresets} from './buttonPresets';

export type ButtonPreset = 'primary' | 'outline' | 'secondary';

interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
  preset?: ButtonPreset;
}

export function Button({
  title,
  loading,
  preset = 'primary',
  ...touchableOpacityBoxProps
}: ButtonProps) {
  const buttonPresset = buttonPresets[preset];

  return (
    <TouchableOpacityBox
      // backgroundColor="buttonPrimary"
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="s16"
      paddingHorizontal="s20"
      {...buttonPresset.container}
      {...touchableOpacityBoxProps}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text preset="paragraphMedium" bold color={buttonPresset.content}>
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
