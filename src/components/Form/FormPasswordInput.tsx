import React from 'react';
import {Controller, UseControllerProps, FieldValues} from 'react-hook-form';
import {TextInput, TextInputProps} from '../TextInput/TextInput';
import {
  PasswordInput,
  PasswordInputProps,
} from '../PasswordInput/PasswordInput';

export function FormPasswordInput<FormType extends FieldValues>({
  control,
  name,
  rules,
  ...passwordInputProps
}: PasswordInputProps & UseControllerProps<FormType>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={{
        required: 'Senha obrigatoria',
        minLength: {
          value: 8,
          message: 'Senha deve ter no minimo 6 caracteres',
        },
      }}
      render={({field, fieldState}) => (
        <PasswordInput
          errorMessage={fieldState.error?.message}
          value={field.value}
          onChangeText={field.onChange}
          {...passwordInputProps}
        />
      )}
    />
  );
}
