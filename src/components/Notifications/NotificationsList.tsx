import { FlatList, StyleSheet, Text } from 'react-native';
import React from 'react';
import useReduxUserState from '../../hooks/useUserState';
import { useGetSelfNotificationsQuery } from '../../generated/graphql';
import { Layout } from '@ui-kitten/components';
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
    onCompleted: (data) => {
      // console.log(data);
    },
    onError: (err) => {
      // console.log(err);
    },
  });

  if (loading) return <FullWidthSpinner />;
  if (!data || error) return <Text>Error retrieving datas fron server</Text>;
  console.log(error);

  return (
    <Layout level="2" style={{ width: '100%', height: '100%' }}>
      <NotificationListLegend />
      <FlatList
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        data={data?.user.notifications}
        renderItem={({ item, index }) => (
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
