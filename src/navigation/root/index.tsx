import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CalendarScreen from '../../screens/CalendarScreen';
import HomeScreen from '../../screens/HomeScreen';
import NotificationsScreen from '../../screens/NotificationsScreen';
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
            borderBottomColor: 'white',
          },
          headerTitleStyle: {
            width: '100%',
            color: 'black',
            fontWeight: 'bold',
            height: '100%',
            padding: 3,
          },
        }}
        component={HomeScreen}
      />
      <Screen
        name="Calendar"
        options={{
          headerStyle: {
            borderBottomColor: 'white',
          },
          headerTitleStyle: {
            width: '100%',
            color: 'black',
            fontWeight: 'bold',
            height: '100%',
            padding: 3,
          },
        }}
        component={CalendarScreen}
      />
      <Screen
        name="Notifications"
        options={{
          headerStyle: {
            borderBottomColor: 'white',
          },
          headerTitleStyle: {
            width: '100%',
            color: 'black',
            fontWeight: 'bold',
            height: '100%',
            padding: 3,
          },
        }}
        component={NotificationsScreen}
      />
    </Navigator>
  );
}

export default TabNavigator;
