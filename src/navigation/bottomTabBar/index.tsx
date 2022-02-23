/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-props-no-spreading */
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
} from '@ui-kitten/components';

function PersonIcon(props) {
  return <Icon {...props} name="home" />;
}

function BottomTabBar({ navigation, state }: BottomTabBarProps) {
  return (
    <BottomNavigation
      selectedIndex={state.index}
      onSelect={(index) => navigation.navigate(state.routeNames[index])}
    >
      <BottomNavigationTab icon={PersonIcon} title="Home" />
    </BottomNavigation>
  );
}

export default BottomTabBar;
