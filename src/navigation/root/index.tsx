import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../../screens/HomeScreen';
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
            backgroundColor: '#F69826',
            height: 100,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            width: '100%',
            fontWeight: 'bold',
            height: '100%',
            fontSize: 30,
          },
        }}
        component={HomeScreen}
      />
    </Navigator>
  );
}

export default TabNavigator;
