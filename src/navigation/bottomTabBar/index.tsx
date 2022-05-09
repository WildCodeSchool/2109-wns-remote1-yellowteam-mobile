import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
  IconProps,
} from '@ui-kitten/components';

function PersonIcon(props: IconProps) {
  return <Icon {...props} name="home" />;
}
function CalendarIcon(props: IconProps) {
  return <Icon {...props} name="calendar" />;
}
function NotificationIcon(props: IconProps) {
  return <Icon {...props} name="bell-outline" />;
}

function BottomTabBar({ navigation, state }: BottomTabBarProps) {
  return (
    <BottomNavigation
      selectedIndex={state.index}
      onSelect={(index) => navigation.navigate(state.routeNames[index])}
    >
      <BottomNavigationTab icon={PersonIcon} title="Home" />
      <BottomNavigationTab icon={CalendarIcon} title="Calendar" />
      <BottomNavigationTab icon={NotificationIcon} title="Home" />
      <BottomNavigationTab icon={NotificationIcon} title="Projects" />
    </BottomNavigation>
  );
}

export default BottomTabBar;
