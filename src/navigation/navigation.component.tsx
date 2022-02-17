import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthNavigator } from './auth/auth.navigator';
import useReduxUserState from '../hooks/useUserState';
import TabNavigator from './root';

export function AppNavigator() {
  const { isAuth } = useReduxUserState();
  return (
    <NavigationContainer>
      {isAuth ? <TabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
