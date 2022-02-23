/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable global-require */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from '@ui-kitten/components';
import { ImageOverlay } from './extra/image-overlay.component';
import { ISigngleNavigationProps } from '../../../../interfaces/global';
import Login from '../../../components/Forms/Signin/Login';
import KeyboardAvoidingView from './extra/3rd-party';

export default function LoginHome({ navigation }: ISigngleNavigationProps) {
  return (
    <KeyboardAvoidingView style={{ height: '100%', backgroundColor: 'white' }}>
      <View style={styles.header}>
        <Text
          style={{
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            fontSize: 50,
            fontFamily: 'poppins-bold',
          }}
        >
          Y Task
        </Text>
        <Text
          style={{
            color: '#242145',

            fontSize: 25,
            fontFamily: 'poppins-bold',
          }}
        >
          manager
        </Text>
      </View>
      <Login />

      <Text
        style={{
          color: 'black',
          fontFamily: 'poppins-regular',
          width: '100%',
          textAlign: 'center',
        }}
      >
        No account yet ?
        <Text
          onPress={() => navigation.navigate('SignUp')}
          style={{ color: '#F69826' }}
        >
          {' '}
          Signup{' '}
        </Text>
        here !
      </Text>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  body: {
    height: '60%',
    width: '100%',
  },
  header: {
    minHeight: 330,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '40%',
    width: '100%',
    backgroundColor: '#F69826',
  },
  title: {
    color: 'white',
    fontSize: 70,
    fontWeight: 'bold',
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
