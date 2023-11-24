import React from 'react';
import {Button as RNButton, TouchableOpacity} from 'react-native';
import {Text} from '../Text/Text';
import {useTheme} from '@shopify/restyle';
import {Theme} from '../../theme/theme';

interface ButtonProps {
  title: string;
}

export function Button({title}: ButtonProps) {
  const {colors} = useTheme<Theme>();

  return (
    <TouchableOpacity
      style={{
        paddingHorizontal: 20,
        paddingVertical: 14,
        backgroundColor: colors.carrotSecondary,
        borderRadius: 16,
        alignItems: 'center',
      }}>
      <Text style={{color: 'white'}} preset="paragraphMedium" bold>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
