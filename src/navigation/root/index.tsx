import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/HomeScreen';
import ProfileScreen from '../../screens/Profile';
import BottomTabBar from '../bottomTabBar';

const { Navigator, Screen } = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={BottomTabBar}
    >
      <Screen name="HomeScreen" component={HomeScreen} />
      <Screen name="ProfileScreen" component={ProfileScreen} />
    </Navigator>
  );
}
export default TabNavigator;
