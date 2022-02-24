/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable global-require */
import React from 'react';
import { Text, View } from 'react-native';
import { Button, StyleService, useStyleSheet } from '@ui-kitten/components';
import KeyboardAvoidingView from './extra/3rd-party';
import { ISigngleNavigationProps } from '../../../../interfaces/global';
import Register from '../../../components/Forms/SignUp/Register';

export default function SignUp({
  navigation,
}: ISigngleNavigationProps): React.ReactElement {
  const [termsAccepted, setTermsAccepted] = React.useState<boolean>(false);
  const [passwordVisible] = React.useState<boolean>(false);

  const styles = useStyleSheet(themedStyles);

  const onSignUpButtonPress = (): void => {
    navigation.navigate('SignUp2');
  };

  const onSignInButtonPress = (): void => {
    navigation.navigate('SignIn3');
  };

  const renderEditAvatarButton = (): React.ReactElement => (
    <Button style={styles.editAvatarButton} status="basic" />
  );

  return (
    <KeyboardAvoidingView style={styles.container}>
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

      <Register />
      <Text
        style={{
          color: 'black',
          fontFamily: 'poppins-regular',
          width: '100%',
          textAlign: 'center',
        }}
      >
        Allready got an account ?
        <Text
          onPress={() => navigation.navigate('Home')}
          style={{ color: '#F69826', padding: 20 }}
        >
          SignIn
        </Text>
        here !
      </Text>
    </KeyboardAvoidingView>
  );
}

const themedStyles = StyleService.create({
  container: {
    backgroundColor: 'background-basic-color-1',
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
  profileAvatar: {
    width: 116,
    height: 116,
    borderRadius: 58,
    alignSelf: 'center',
    backgroundColor: 'background-basic-color-1',
    tintColor: 'color-primary-default',
  },
  editAvatarButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  formContainer: {
    flex: 1,
    paddingTop: 32,
    paddingHorizontal: 16,
  },
  emailInput: {
    marginTop: 16,
  },
  passwordInput: {
    marginTop: 16,
  },
  termsCheckBox: {
    marginTop: 24,
  },
  termsCheckBoxText: {
    color: 'text-hint-color',
  },
  signUpButton: {
    marginHorizontal: 16,
  },
  signInButton: {
    marginVertical: 12,
    marginHorizontal: 16,
  },
});
