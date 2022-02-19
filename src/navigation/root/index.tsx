import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/HomeScreen';
import ProfileScreen from '../../screens/Profile';
import BottomTabBar from '../bottomTabBar';

const { Navigator, Screen } = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Navigator
      screenOptions={{
        headerShown: true,
      }}
      tabBar={BottomTabBar}
    >
      <Screen
        name="Home"
        options={{
          headerStyle: {
            backgroundColor: '#0A2755',
            borderBottomLeftRadius: 50,
            height: 200,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            height: '100%',
            padding: 30,
          },
        }}
        component={HomeScreen}
      />
      <Screen
        options={{
          headerStyle: {
            backgroundColor: '#0A2755',
            borderBottomLeftRadius: 50,
            height: 100,
          },

          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            height: '100%',
            padding: 30,
          },
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Navigator>
  );
}
export default TabNavigator;
