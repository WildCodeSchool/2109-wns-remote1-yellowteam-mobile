/* eslint-disable global-require */
import React from 'react';
import { View } from 'react-native';
import {
  Button,
  CheckBox,
  Input,
  Layout,
  StyleService,
  useStyleSheet,
} from '@ui-kitten/components';
import { ProfileAvatar } from './extra/profile-avatar.component';
import KeyboardAvoidingView from './extra/3rd-party';
import { ISigngleNavigationProps } from '../../../../interfaces/global';

export default function SignIp2({
  navigation,
}: ISigngleNavigationProps): React.ReactElement {
  const [userName, setUserName] = React.useState<string>();
  const [email, setEmail] = React.useState<string>();
  const [password, setPassword] = React.useState<string>();
  const [termsAccepted, setTermsAccepted] = React.useState<boolean>(false);
  const [passwordVisible] = React.useState<boolean>(false);
  const styles = useStyleSheet(themedStyles);

  const onSignUpButtonPress = () => navigation.navigate('SignUp2');

  const onSignInButtonPress = () => navigation.navigate('SignIn3');

  const renderEditAvatarButton = (): React.ReactElement => (
    <Button style={styles.editAvatarButton} status="basic" />
  );

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.headerContainer}>
        <ProfileAvatar
          style={styles.profileAvatar}
          resizeMode="center"
          source={require('./assets/image-person.png')}
          editButton={renderEditAvatarButton}
        />
      </View>
      <Layout style={styles.formContainer} level="1">
        <Input
          autoCapitalize="none"
          placeholder="User Name"
          value={userName}
          onChangeText={setUserName}
        />
        <Input
          style={styles.emailInput}
          autoCapitalize="none"
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <Input
          style={styles.passwordInput}
          autoCapitalize="none"
          secureTextEntry={!passwordVisible}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
        />
        <CheckBox
          style={styles.termsCheckBox}
          textStyle={styles.termsCheckBoxText}
          text="I read and agree to Terms & Conditions"
          checked={termsAccepted}
          onChange={(checked: boolean) => setTermsAccepted(checked)}
        />
      </Layout>
      <Button
        style={styles.signUpButton}
        size="giant"
        onPress={onSignUpButtonPress}
      >
        SIGN UP
      </Button>
      <Button
        style={styles.signInButton}
        appearance="ghost"
        status="basic"
        onPress={onSignInButtonPress}
      >
        Already have an account? Sign In
      </Button>
    </KeyboardAvoidingView>
  );
}

const themedStyles = StyleService.create({
  container: {
    backgroundColor: 'background-basic-color-1',
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 216,
    backgroundColor: 'color-primary-default',
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
