/* eslint-disable no-console */
import { Button, Layout } from '@ui-kitten/components';
import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { StyleSheet } from 'react-native';
import { useSignInMutation } from '../../../generated/graphql';
import useReduxUserState from '../../../hooks/useUserState';
import ControlledInput from '../../UI/ControlledInput';
import ControlledSecureInput from '../../UI/ControlledSecureInput';

export default function Login() {
  const { handleSubmit, control } = useForm();
  const { dispatchLogin } = useReduxUserState();
  const [passwordVisible] = React.useState<boolean>(false);
  const [mutateSignIn] = useSignInMutation();

  const onSubmit = async (formData: FieldValues): Promise<void> => {
    await mutateSignIn({
      variables: {
        data: { email: formData.email, password: formData.password },
      },
      onCompleted: (res) => {
        dispatchLogin(res.login);
      },
      onError: (e) => console.log('error', e),
    });
  };

  return (
    <Layout style={styles.formContainer} level="1">
      <ControlledInput placeholder="Email" control={control} name="email" />
      <ControlledSecureInput
        placeholder="Password"
        control={control}
        name="password"
        passwordVisible={passwordVisible}
      />
      <Button onPress={handleSubmit(onSubmit)} style={styles.button}>
        Sign In
      </Button>
    </Layout>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 80,
    paddingHorizontal: 40,
  },
  button: {
    marginVertical: 50,
  },
});
