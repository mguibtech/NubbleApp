import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/Routes';
import {useResetNavigationSuccess} from '../../../hooks/useResetNavigationSuccess';

import {
  forgotPasswordSchema,
  ForgotPasswordSchema,
} from './forgotPasswordSchema';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {FormTextInput} from '../../../components/Form/FormTextInput';

type ScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ForgotPasswordScreen'
>;

export function ForgotPasswordScreen({navigation}: ScreenProps) {
  const {reset} = useResetNavigationSuccess();
  const {control, handleSubmit, formState} = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
  });

  function submitForm(values: ForgotPasswordSchema) {
    console.log(values);
    reset({
      title: `Enviamos as intruções ${'\n'} para o seu e-mail`,
      description: `Clique no link enviado no seu e-mail para recuperar sua senha`,
      icon: {
        name: 'messageRound',
        color: 'success',
      },
    });
  }

  return (
    <Screen canGoBack>
      <Text preset="headingLarge" mb="s16">
        Esqueci minha senha
      </Text>
      <Text>
        Digite seu e-mail e enviaremos as instruções para redefinição de senha
      </Text>

      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{mt: 's32'}}
      />

      <Button
        title="Recuperar senha"
        onPress={handleSubmit(submitForm)}
        mt="s48"
        disabled={!formState.isValid}
      />
    </Screen>
  );
}
