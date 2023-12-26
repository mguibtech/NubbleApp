import React, {useState} from 'react';
import {TextInput, TextInputProps, Icon} from '@components';

export type PasswordInputProps = Omit<TextInputProps, 'RightComponent'>;

export function PasswordInput(props: PasswordInputProps) {
  const [isSecurityTextEntry, setIsSecurityTextEntry] = useState(true);

  function toggleSecureTextEntry() {
    setIsSecurityTextEntry(prev => !prev);
  }

  return (
    <TextInput
      secureTextEntry={isSecurityTextEntry}
      {...props}
      placeholder="Digite a senha"
      RightComponent={
        <Icon
          onPress={toggleSecureTextEntry}
          color="gray2"
          name={isSecurityTextEntry ? 'eyeOn' : 'eyeOff'}
        />
      }
    />
  );
}
