import {$textInputStyle, Box, Text} from '@components';
import {useAppTheme} from '@hooks';
import React, {useRef} from 'react';
import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  TextStyle,
} from 'react-native';

interface TextInputProps extends RNTextInputProps {
  onPressSend: (message: string) => void;
}

export function TextMessage({
  onPressSend,
  value,
  ...rnTextInputProps
}: TextInputProps) {
  const inputRef = useRef<RNTextInput>(null);
  const {colors} = useAppTheme();
  const sendIsDisabled = value?.trim().length === 0;

  function focusInput() {
    inputRef.current?.focus();
  }

  return (
    <Pressable onPressIn={focusInput}>
      <Box
        paddingHorizontal="s16"
        paddingVertical="s14"
        backgroundColor="gray5"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        borderRadius="s12">
        <RNTextInput
          value={value}
          ref={inputRef}
          placeholderTextColor={colors.gray2}
          style={[$textInputStyle, {color: colors.gray1}]}
          {...rnTextInputProps}
          //   placeholderTextColor={Colors.gray2}
        />
        <Pressable
          disabled={sendIsDisabled}
          onPress={() => onPressSend(value || '')}>
          <Text color={sendIsDisabled ? 'gray2' : 'primary'}>Enviar</Text>
        </Pressable>
      </Box>
    </Pressable>
  );
}
