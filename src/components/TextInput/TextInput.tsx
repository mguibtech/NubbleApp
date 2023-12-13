import React from 'react';
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextIpuntProps,
} from 'react-native';
import {Box, BoxProps} from '../Box/Box';
import {Text} from '../Text/Text';

interface TextInputProps extends RNTextIpuntProps {
  label: string;
}

export function TextInput({label, ...rnTextInputProps}: TextInputProps) {
  return (
    <Box>
      <Text mb="s4" preset="paragraphMedium" semiBold>
        {label}
      </Text>
      <Box {...$textInputContainer}>
        <RNTextInput
          style={{borderWidth: 1, height: 50}}
          {...rnTextInputProps}
        />
      </Box>
    </Box>
  );
}

const $textInputContainer: BoxProps = {
  borderWidth: 1,
  padding: 's16',
  borderColor: 'gray4',
  borderRadius: 's12',
};
