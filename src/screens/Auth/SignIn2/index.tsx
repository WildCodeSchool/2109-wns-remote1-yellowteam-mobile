import React from 'react';
import { View } from 'react-native';
import {
  Button,
  Input,
  Layout,
  StyleService,
  Text,
  useStyleSheet,
} from '@ui-kitten/components';
import { gql, useMutation, useQuery } from '@apollo/client';
import { StatusBar } from '../../../status-bar.component';
import { EyeIcon, EyeOffIcon, PersonIcon } from './extra/icons';
import { KeyboardAvoidingView } from './extra/3rd-party';
import useReduxUserState from '../../../hooks/useUserState';
import { ISigngleNavigationProps } from '../../../..';

const LOGIN = gql`
  mutation ($data: LoginInput!) {
    login(data: $data) {
      id
      first_name
      last_name
      email
      avatar
    }
  }
`;
export default function ({
  navigation,
}: ISigngleNavigationProps): React.ReactElement {
  const [email, setEmail] = React.useState<string>();
  const [password, setPassword] = React.useState<string>();
  const [passwordVisible, setPasswordVisible] = React.useState<boolean>(false);
  console.log('signin2');
  const { dispatchLogin } = useReduxUserState();

  const [mutate, { loading, data }] = useMutation(LOGIN, {
    onCompleted: (e) => {
      console.log(e);
      dispatchLogin(e.login);
    },
    onError: (e) => console.log('fail', e),
  });
  const styles = useStyleSheet(themedStyles);

  const onSignInButtonPress = async (): Promise<void> => {
    console.log(email, password);

    mutate({
      variables: { data: { email, password } },
    });
  };

  const onSignUpButtonPress = (): void => {
    navigation && navigation.navigate('SignUp2');
  };

  const onForgotPasswordButtonPress = (): void => {
    navigation && navigation.navigate('ForgotPassword');
  };

  const onPasswordIconPress = (): void => {
    setPasswordVisible(!passwordVisible);
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
        <Input
          placeholder="Email"
          icon={PersonIcon}
          value={email}
          onChangeText={setEmail}
        />
        <Input
          style={styles.passwordInput}
          placeholder="Password"
          icon={passwordVisible ? EyeIcon : EyeOffIcon}
          value={password}
          secureTextEntry={!passwordVisible}
          onChangeText={setPassword}
          onIconPress={onPasswordIconPress}
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
        onPress={onSignInButtonPress}
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
        Don't have an account? Create
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
