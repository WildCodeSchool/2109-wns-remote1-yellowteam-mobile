/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
/* eslint-disable no-console */
import { createStackNavigator } from '@react-navigation/stack';
import { Spinner } from '@ui-kitten/components';
import { AuthTabParamList } from '../../../types';
import SignUp from '../../screens/Auth/SignUp';
import useReduxUserState from '../../hooks/useUserState';
import { useMutateMeMutation } from '../../generated/graphql';
import LoginHome from '../../screens/Auth/SignIn';

const Stack = createStackNavigator<AuthTabParamList>();

export default function AuthNavigator() {
  const { dispatchLogin, isAuth } = useReduxUserState();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [me] = useMutateMeMutation({
    onCompleted: (data) => {
      setIsLoading(false);
      dispatchLogin(data.me);
    },
    onError: () => {
      setIsLoading(false);
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
      <Stack.Screen name="Home" component={LoginHome} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}
