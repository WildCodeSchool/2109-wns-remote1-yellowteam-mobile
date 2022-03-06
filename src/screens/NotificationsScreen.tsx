import { StyleSheet, Text, View } from 'react-native';
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

const styles = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
  },
  contentContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
});
