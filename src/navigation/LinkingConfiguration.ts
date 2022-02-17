/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              HomeScreen: 'home',
            },
          },
        },
      },
      AuthNavigator: {
        screens: {
          Home: {
            screens: {
              HomeScreen: 'home',
            },
          },
          SignIn: {
            screens: {
              SignInScreen: 'signin',
            },
          },
          SignIn2: {
            screens: {
              SignIn2Screen: 'signin2',
            },
          },
          SignUp: {
            screens: {
              SignIn2Screen: 'signup',
            },
          },
          ForgotPassword: {
            screens: {
              SignIn2Screen: 'forgotpassword',
            },
          },
        },
      },
      Modal: 'modal',
      NotFound: '*',
    },
  },
};

export default linking;
