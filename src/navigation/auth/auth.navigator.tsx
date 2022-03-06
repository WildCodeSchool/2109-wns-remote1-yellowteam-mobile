/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
/* eslint-disable no-console */
import { createStackNavigator } from '@react-navigation/stack';
import { Spinner } from '@ui-kitten/components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthTabParamList } from '../../../types';
import HomeScreen from '../../screens/Auth/Home';
import useReduxUserState from '../../hooks/useUserState';
import { useMutateMeMutation } from '../../generated/graphql';

const Stack = createStackNavigator<AuthTabParamList>();

export default function AuthNavigator() {
  const { dispatchLogin, isAuth } = useReduxUserState();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [me] = useMutateMeMutation({
    onCompleted: (data) => {
      setIsLoading(false);
      dispatchLogin(data.me);
    },
    onError: (e) => {
      setIsLoading(false);
      AsyncStorage.removeItem('x-authorization').catch((err) =>
        console.log(err),
      );
    },
  });

  useEffect(() => {
    me().catch((err) => console.log(err));
  }, []);

  if (isLoading && !isAuth) return <Spinner />;

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      {/* <Stack.Screen name="SignUp" component={SignUp} /> */}
    </Stack.Navigator>
  );
}
