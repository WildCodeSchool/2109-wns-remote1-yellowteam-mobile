/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-console */
import React from 'react';
import { View } from 'react-native';
import { Controller, FieldValues, useForm } from 'react-hook-form';
import {
  Button,
  Input,
  Layout,
  StyleService,
  Text,
  useStyleSheet,
} from '@ui-kitten/components';
import KeyboardAvoidingView from './extra/3rd-party';
import useReduxUserState from '../../../hooks/useUserState';
import { ISigngleNavigationProps } from '../../../../interfaces/global';
import { useSignInMutation } from '../../../generated/graphql';

export default function SignIn2({
  navigation,
}: ISigngleNavigationProps): React.ReactElement {
  const [passwordVisible] = React.useState<boolean>(false);
  const { dispatchLogin } = useReduxUserState();
  const { handleSubmit, control } = useForm();

  const [mutate] = useSignInMutation();

  const styles = useStyleSheet(themedStyles);

  const onSubmit = async (formData: FieldValues): Promise<void> => {
    await mutate({
      variables: {
        data: { email: formData.email, password: formData.password },
      },
      onCompleted: (res) => {
        console.log(res);

        dispatchLogin(res.login);
      },
      onError: (e) => console.log('error', e),
    });
  };

  const onSignUpButtonPress = (): void => {
    navigation.navigate('SignUp2');
  };
  const onForgotPasswordButtonPress = (): void => {
    navigation.navigate('ForgotPassword');
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text category="h1" status="control">
          Y Task
        </Text>
        <Text style={styles.signInLabel} category="s1" status="control">
          Sign in to your account
        </Text>
      </View>

      <Layout style={styles.formContainer} level="1">
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onChangeText={(v) => onChange(v)}
              placeholder="Email"
              value={value}
              onBlur={onBlur}
              size="large"
              style={{ marginVertical: 10 }}
            />
          )}
          name="email"
          rules={{ required: true }}
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              size="large"
              style={{ marginVertical: 10 }}
              onChangeText={(v) => onChange(v)}
              placeholder="Pasword"
              value={value}
              onBlur={onBlur}
              label="Password"
              secureTextEntry={!passwordVisible}
            />
          )}
          name="password"
          rules={{ required: true }}
        />

        <View style={styles.forgotPasswordContainer}>
          <Button
            style={styles.forgotPasswordButton}
            appearance="ghost"
            status="basic"
            onPress={onForgotPasswordButtonPress}
          >
            Forgot your password?
          </Button>
        </View>
      </Layout>
      <Button
        onPress={handleSubmit(onSubmit)}
        style={styles.signInButton}
        size="giant"
      >
        SIGN IN
      </Button>
      <Button
        style={styles.signUpButton}
        appearance="ghost"
        status="basic"
        onPress={onSignUpButtonPress}
      >
        Don&apos;t have an account? Create
      </Button>
    </KeyboardAvoidingView>
  );
}

const themedStyles = StyleService.create({
  mainContainer: {
    backgroundColor: 'background-basic-color-1',
    flex: 1,
  },
  container: {
    backgroundColor: 'background-basic-color-1',
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 216,
    backgroundColor: 'color-primary-default',
  },
  formContainer: {
    flex: 1,
    paddingTop: 32,
    paddingHorizontal: 16,
  },
  signInLabel: {
    marginTop: 16,
  },
  signInButton: {
    marginHorizontal: 16,
  },
  signUpButton: {
    marginVertical: 12,
    marginHorizontal: 16,
  },
  forgotPasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  passwordInput: {
    marginTop: 16,
  },
  forgotPasswordButton: {
    paddingHorizontal: 0,
  },
});
