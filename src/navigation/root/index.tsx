import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import ProjectIcon from '../../static/svg/ProjectIcon';
import TasksIcon from '../../static/svg/TasksIcon';
import UserIcon from '../../static/svg/UserIcon';
import CalendarScreen from '../../screens/CalendarScreen';
import HomeScreen from '../../screens/HomeScreen';
import NotificationsScreen from '../../screens/NotificationsScreen';
import ProjectsScreen from '../../screens/ProjectsScreen';

const { Navigator, Screen } = createBottomTabNavigator();

type NavObj = {
  name: Navigation;
  svg: React.FC<{ color: string }>;
};

export type Navigation =
  | 'Home'
  | 'Profile'
  | 'Tasks'
  | 'Projects'
  | 'Calendar'
  | 'Notifications';

type NavigationMap = Record<Navigation, NavObj>;

const categories: NavigationMap = {
  Home: {
    name: 'Home',
    svg: UserIcon,
  },
  Profile: {
    name: 'Profile',
    svg: UserIcon,
  },
  Tasks: {
    name: 'Tasks',
    svg: TasksIcon,
  },
  Projects: {
    name: 'Projects',
    svg: ProjectIcon,
  },
  Calendar: {
    name: 'Calendar',
    svg: TasksIcon,
  },
  Notifications: {
    name: 'Notifications',
    svg: TasksIcon,
  },
};

const screenOptions = (route: RouteProp<ParamListBase, string>) => {
  const Svg = categories[route.name as Navigation].svg;

  return (
    <View>
      <Svg color="#FF9200" />
    </View>
  );
};

function TabNavigator() {
  return (
    <Navigator
      screenOptions={({ route }) => ({
        headerShown: true,
        tabBarIcon: () => screenOptions(route),
      })}
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
      <Screen
        name="Projects"
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
        component={ProjectsScreen}
      />
    </Navigator>
  );
}

export default TabNavigator;
