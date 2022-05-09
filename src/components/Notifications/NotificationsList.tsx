/* eslint-disable curly */
/* eslint-disable nonblock-statement-body-position */
/* eslint-disable no-console */
import { FlatList, StyleSheet, Text } from 'react-native';
import React from 'react';
import { Layout } from '@ui-kitten/components';
import useReduxUserState from '../../hooks/useUserState';
import { useGetSelfNotificationsQuery } from '../../generated/graphql';
import NoficationCard from './NotificationCard';
import FullWidthSpinner from '../UI/UX/FullWidthSpinner';
import NotificationListLegend from './NotificationListLegend';

export default function NotificationsList() {
  const { user } = useReduxUserState();
  const { data, loading, error } = useGetSelfNotificationsQuery({
    variables: {
      where: {
        id: user.id || '',
      },
    },
    onCompleted: (res) => {},
    onError: (err) => {},
  });

  if (loading) return <FullWidthSpinner />;
  if (!data?.user || error)
    return <Text>Error retrieving datas fron server</Text>;

  return (
    <Layout level="2" style={{ width: '100%', height: '100%' }}>
      <NotificationListLegend />
      <FlatList
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        data={data?.user.notifications}
        renderItem={({ item }) => (
          <NoficationCard key={item.id} notification={item} />
        )}
      />
    </Layout>
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
