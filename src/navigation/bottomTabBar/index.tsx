import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
} from '@ui-kitten/components';
import {
  NavigationScreenProp,
  NavigationParams,
  NavigationState,
} from 'react-navigation';

function PersonIcon(props) {
  return <Icon {...props} name="person-outline" />;
}
function FileIcon(props) {
  return <Icon {...props} name="file" />;
}
function ProjectIcon(props) {
  return <Icon {...props} name="folder" />;
}
function NotificationIcon(props) {
  return <Icon {...props} name="bell-outline" />;
}

interface IBottomTabBarParams {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
  state: any;
}

function BottomTabBar({ navigation, state }: BottomTabBarProps) {
  return (
    <BottomNavigation
      selectedIndex={state.index}
      onSelect={(index) => navigation.navigate(state.routeNames[index])}
    >
      <BottomNavigationTab icon={PersonIcon} title="HomeScreen" />
    </BottomNavigation>
  );
}

export default BottomTabBar;
