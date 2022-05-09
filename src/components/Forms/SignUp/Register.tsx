/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-console */
import { FieldValues, useForm } from 'react-hook-form';
import { StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { Button, Layout } from '@ui-kitten/components';
import ControlledInput from '../../UI/FormControls/ControlledInput';
import ControlledSecureInput from '../../UI/FormControls/ControlledSecureInput';
import useReduxUserState from '../../../hooks/useUserState';
import { useSignUpMutation } from '../../../generated/graphql';

export default function Register() {
  const { handleSubmit, control } = useForm();
  const { dispatchLogin } = useReduxUserState();
  const [passwordVisible] = useState<boolean>(false);
  const [mutateRegister] = useSignUpMutation();

  const onSubmit = async (formData: FieldValues): Promise<void> => {
    await mutateRegister({
      variables: {
        data: {
          email: formData.email,
          first_name: formData.first_name,
          password: formData.password,
          last_name: formData.last_name,
        },
      },
      onCompleted: (res) => {
        const { __typename, ...newUser } = res.register;
        dispatchLogin(newUser);
      },
      onError: (err) => console.log('error', err),
    });
  };

  return (
    <Layout style={styles.formContainer} level="1">
      <ControlledInput placeholder="Email" control={control} name="email" />
      <ControlledInput
        placeholder="First Name"
        control={control}
        name="first_name"
      />
      <ControlledInput
        placeholder="Last Name"
        control={control}
        name="last_name"
      />
      <ControlledSecureInput
        placeholder="Password"
        control={control}
        name="password"
        passwordVisible={passwordVisible}
      />
      <ControlledSecureInput
        placeholder="Confirm Password"
        control={control}
        name="confirmpassword"
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
    paddingVertical: 20,
    paddingHorizontal: 40,
  },
  button: {
    marginVertical: 50,
  },
});
