/* eslint-disable global-require */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from '@ui-kitten/components';
import { ImageOverlay } from './extra/image-overlay.component';
import { ISigngleNavigationProps } from '../../../../interfaces/global';

export default function LoginHome({ navigation }: ISigngleNavigationProps) {
  const onSignInButtonPress = (): void => {
    navigation.navigate('SignIn');
  };

  const onSignUpButtonPress = (): void => {
    navigation.navigate('SignUp');
  };
  return (
    <ImageOverlay
      style={styles.container}
      source={require('./assets/background2.jpg')}
    >
      <View style={styles.headerContainer}>
        <Text style={{ fontSize: 60 }} category="h1" status="control">
          Y Task
        </Text>
        <Text style={styles.signInLabel} category="s1" status="control">
          Sign in to your account
        </Text>
      </View>
      <View>
        <Button
          style={styles.signInButton}
          status="control"
          size="giant"
          onPress={onSignInButtonPress}
        >
          SIGN IN
        </Button>
        <Button
          style={styles.signUpButton}
          appearance="ghost"
          status="control"
          onPress={onSignUpButtonPress}
        >
          Don&apos;t have an account? Sign Up
        </Button>
      </View>
    </ImageOverlay>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 216,
  },
  formContainer: {
    flex: 1,
    marginTop: 32,
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
