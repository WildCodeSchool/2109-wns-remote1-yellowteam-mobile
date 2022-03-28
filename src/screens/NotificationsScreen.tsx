import { Text } from 'react-native';
import React from 'react';
import { Layout, ViewPager } from '@ui-kitten/components';
import NotificationsList from '../components/Notifications/NotificationsList';

export default function NotificationsScreen() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <ViewPager
      style={{ flex: 1 }}
      selectedIndex={selectedIndex}
      onSelect={(index) => setSelectedIndex(index)}
    >
      <NotificationsList />
      <Layout level="2" style={{ width: '100%', height: '100%' }}>
        <Text>second view</Text>
      </Layout>
    </ViewPager>
  );
}
