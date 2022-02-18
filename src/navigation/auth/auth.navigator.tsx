/* eslint-disable no-console */
import { AsyncStorage } from 'react-native';
import { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthTabParamList } from '../../../types';
import HomeScreen from '../../screens/Auth/Home';
import SignIn from '../../screens/Auth/SignIn2';
import SignIn3 from '../../screens/Auth/SignIn3';
import SignUp from '../../screens/Auth/SignUp';
import ForgotPassword from '../../screens/Auth/ForgotPassword';
import useReduxUserState from '../../hooks/useUserState';
import { useMutateMeMutation } from '../../generated/graphql';

const Stack = createStackNavigator<AuthTabParamList>();

export default function AuthNavigator() {
  const { dispatchLogin } = useReduxUserState();

  const [me] = useMutateMeMutation({
    onCompleted: (data) => dispatchLogin(data.me),
    onError: (e) => {
      console.log(e);
      AsyncStorage.setItem('x-authorization', '').catch((err) =>
        console.log(err),
      );
    },
  });

  me().catch((err) => console.log(err));

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignIn3" component={SignIn3} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
}
