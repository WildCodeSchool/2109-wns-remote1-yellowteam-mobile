/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
/* eslint-disable no-console */
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthTabParamList } from '../../../types';
import HomeScreen from '../../screens/Auth/Home';
import SignUp from '../../screens/Auth/SignUp';
import useReduxUserState from '../../hooks/useUserState';
import { useMutateMeMutation } from '../../generated/graphql';

const Stack = createStackNavigator<AuthTabParamList>();

export default function AuthNavigator() {
  const { dispatchLogin } = useReduxUserState();
  const [me] = useMutateMeMutation({
    onCompleted: (data) => {
      console.log('====================================');
      console.log(data);
      console.log('====================================');
      dispatchLogin(data.me);
    },
    onError: (e) => {
      console.log(e);
      AsyncStorage.setItem('x-authorization', '').catch((err) =>
        console.log(err),
      );
    },
  });

  useEffect(() => {
    me().catch((err) => console.log(err));
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}
