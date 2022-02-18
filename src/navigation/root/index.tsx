import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/HomeScreen';
import BottomTabBar from '../bottomTabBar';

const { Navigator, Screen } = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Navigator tabBar={BottomTabBar}>
      <Screen name="HomeScreen" component={HomeScreen} />
    </Navigator>
  );
}
export default TabNavigator;
