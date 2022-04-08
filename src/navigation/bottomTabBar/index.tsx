// /* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable react/jsx-props-no-spreading */
// import {
//   BottomTabBarProps,
//   createBottomTabNavigator,
// } from '@react-navigation/bottom-tabs';
// import React from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';

// function BottomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
//   return (
//     <View
//       style={{
//         flexDirection: 'row',
//       }}
//     >
//       {state.routes.map(
//         (route: { key: string | number; name: any }, index: any) => {
//           const { options } = descriptors[route.key];
//           const label =
//             options.tabBarLabel !== undefined
//               ? options.tabBarLabel
//               : options.title !== undefined
//               ? options.title
//               : route.name;

//           const isFocused = state.index === index;

//           const onPress = () => {
//             const event = navigation.emit({
//               type: 'tabPress',
//               target: route.key,
//               canPreventDefault: true,
//             });

//             if (!isFocused && !event.defaultPrevented) {
//               // The `merge: true` option makes sure that the params inside the tab screen are preserved
//               navigation.navigate({ name: route.name, merge: true });
//             }
//           };

//           const onLongPress = () => {
//             navigation.emit({
//               type: 'tabLongPress',
//               target: route.key,
//             });
//           };

//           return (
//             <TouchableOpacity
//               accessibilityRole="button"
//               accessibilityState={isFocused ? { selected: true } : {}}
//               accessibilityLabel={options.tabBarAccessibilityLabel}
//               testID={options.tabBarTestID}
//               onPress={onPress}
//               onLongPress={onLongPress}
//               style={{
//                 flex: 1,
//                 paddingBottom: 200,
//                 borderColor: 'blue',
//                 borderWidth: 3,
//               }}
//             ></TouchableOpacity>
//           );
//         },
//       )}
//     </View>
//   );
// }

// export default BottomTabBar;

// // /* eslint-disable @typescript-eslint/no-explicit-any */
// // /* eslint-disable react/jsx-props-no-spreading */
// // import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
// // import {
// //   BottomNavigation,
// //   BottomNavigationTab,
// //   Icon,
// // } from '@ui-kitten/components';

// // function PersonIcon(props: unknown) {
// //   return <Icon {...props} name="home" />;
// // }

// // function BottomTabBar({ navigation, state }: BottomTabBarProps) {
// //   return (
// //     <BottomNavigation
// //       selectedIndex={state.index}
// //       onSelect={(index) => navigation.navigate(state.routeNames[index])}
// //     >
// //       <BottomNavigationTab icon={PersonIcon} title="Home" />
// //     </BottomNavigation>
// //   );
// // }

// // export default BottomTabBar;
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-props-no-spreading */
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
} from '@ui-kitten/components';

function PersonIcon(props: unknown) {
  return <Icon {...props} name="home" />;
}
function Calendar(props: unknown) {
  return <Icon {...props} name="calendar" />;
}
function NotificationIcon(props: unknown) {
  return <Icon {...props} name="bell-outline" />;
}

function BottomTabBar({ navigation, state }: BottomTabBarProps) {
  return (
    <BottomNavigation
      selectedIndex={state.index}
      onSelect={(index) => navigation.navigate(state.routeNames[index])}
    >
      <BottomNavigationTab icon={PersonIcon} title="Home" />
      <BottomNavigationTab icon={Calendar} title="Calendar" />
      <BottomNavigationTab icon={NotificationIcon} title="Home" />
    </BottomNavigation>
  );
}

export default BottomTabBar;
