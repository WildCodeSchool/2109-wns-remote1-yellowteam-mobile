import { createStackNavigator } from '@react-navigation/stack';
import { AuthTabParamList } from '../../../types';
import HomeScreen from '../../screens/Auth/Home';
import SignIn from '../../screens/Auth/SignIn2';
import SignIn3 from '../../screens/Auth/SignIn3';
import SignUp from '../../screens/Auth/SignUp';
import SignUp2 from '../../screens/Auth/SignUp2';
import ForgotPassword from '../../screens/Auth/ForgotPassword';

const Stack = createStackNavigator<AuthTabParamList>();

export default function AuthNavigator() {
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
