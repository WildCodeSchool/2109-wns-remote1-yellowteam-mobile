import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from '../../screens/ProfileScreen';
import ProjectsScreen from '../../screens/ProjectsScreen';
import TasksScreen from '../../screens/TasksScreen';
import ProjectIcon from '../../static/svg/ProjectIcon';
import TasksIcon from '../../static/svg/TasksIcon';
import UserIcon from '../../static/svg/UserIcon';
import HomeScreen from '../../screens/HomeScreen';
import { View } from 'react-native';
import { ParamListBase, RouteProp } from '@react-navigation/native';

const { Navigator, Screen } = createBottomTabNavigator();

type NavObj = {
  name: Navigation;
  svg: React.FC<{ color: string }>;
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
            backgroundColor: '#F4F6F8',
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
            backgroundColor: '#F4F6F8',
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
            backgroundColor: '#F4F6F8',
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
            backgroundColor: '#F4F6F8',
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
