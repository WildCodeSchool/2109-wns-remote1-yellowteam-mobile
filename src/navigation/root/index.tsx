import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { Icon } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { ISigngleNavigationProps } from '../../../interfaces/global';
import HomeScreen from '../../screens/HomeScreen';
import ProfileScreen from '../../screens/Profile';
import BottomTabBar from '../bottomTabBar';

const { Navigator, Screen } = createBottomTabNavigator();

function StarIcon({ navigate }: ISigngleNavigationProps['navigation']) {
  return (
    <Icon
      onPress={() => navigate('Home')}
      style={styles.icon}
      fill="#FFFFFF"
      name="arrow-back-outline"
    />
  );
}

function TabNavigator() {
  const navigation = useNavigation();
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
            height: 120,
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
    </Navigator>
  );
}

const styles = StyleSheet.create({
  tab: {
    width: '100%',
  },
  icon: {
    marginHorizontal: 20,
    width: 32,
    height: 32,
  },
});

export default TabNavigator;
