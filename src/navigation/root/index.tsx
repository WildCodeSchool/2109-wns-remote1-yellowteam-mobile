import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from '../../screens/ProfileScreen';
import ProjectsScreen from '../../screens/ProjectsScreen';
import TasksScreen from '../../screens/TasksScreen';
import ProjectIcon from '../../static/svg/ProjectIcon';
import TasksIcon from '../../static/svg/TasksIcon';
import UserIcon from '../../static/svg/UserIcon';
import HomeScreen from '../../screens/HomeScreen';
import { View } from 'react-native';
import BottomTabBar from '../bottomTabBar';

const { Navigator, Screen } = createBottomTabNavigator();

type NavObj = {
  name: string;
  svg: React.FC<{ color: string }>;
};

type NavRoute = {
  key: string;
  name: Navigation;
  params: string;
};

export type Navigation = 'Home' | 'Profile' | 'Tasks' | 'Projects';

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
};

const screenOptions = (route: NavRoute) => {
  const Svg = categories[route.name].svg;
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
            height: 110,
            shadowRadius: 0,
            shadowOffset: {
              height: 0,
              width: 0,
            },
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'left',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 30,
            color: '#626262',
            paddingBottom: 40,
          },
        }}
        component={HomeScreen}
      />
      <Screen
        name="Profile"
        options={{
          headerStyle: {
            height: 110,
            shadowRadius: 0,
            shadowOffset: {
              height: 0,
              width: 0,
            },
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'left',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 30,
            color: '#626262',
            paddingBottom: 40,
          },
        }}
        component={ProfileScreen}
      />
      <Screen
        name="Tasks"
        options={{
          headerStyle: {
            height: 110,
            shadowRadius: 0,
            shadowOffset: {
              height: 0,
              width: 0,
            },
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'left',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 30,
            color: '#626262',
            paddingBottom: 40,
          },
        }}
        component={TasksScreen}
      />
      <Screen
        name="Projects"
        options={{
          headerStyle: {
            height: 110,
            shadowRadius: 0,
            shadowOffset: {
              height: 0,
              width: 0,
            },
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'left',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 30,
            color: '#626262',
            paddingBottom: 40,
          },
        }}
        component={ProjectsScreen}
      />
    </Navigator>
  );
}

export default TabNavigator;
