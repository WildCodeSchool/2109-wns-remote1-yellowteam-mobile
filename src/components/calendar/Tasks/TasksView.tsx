import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Spinner } from '@ui-kitten/components';
import { FlatList } from 'react-native-gesture-handler';

import { useGetAllTasksByProjectQuery } from '../../../generated/graphql';
import TaskCard from './TaskCard';

export default function TasksView({ selectedDay }: IProps) {
  const { data, loading } = useGetAllTasksByProjectQuery({
    variables: {
      where: {
        users: {
          some: {
            id: {
              equals: 'afe878e4-7000-4e23-aaa8-05bdd8e90536',
            },
          },
        },
      },
    },
  });
  if (!selectedDay || !selectedDay.item || loading) return <Spinner />;
  if (!data) return <Text>Error getting datas</Text>;

  const selectedDayFilter = () =>
    data?.projects.map((i) =>
      i.tasks.filter(
        (item) =>
          new Date(item.end_date).toISOString() >
          new Date(selectedDay.item.isoDay).toISOString(),
      ),
    );

  const flatFilter = () => selectedDayFilter().flat().flat();

  if (loading) return <Spinner />;

  return (
    <View style={{ width: '100%', height: '50%' }}>
      <FlatList
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        data={flatFilter()}
        renderItem={({ item, index }) => <TaskCard item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: 'white',
    width: '100%',
  },
  contentContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
});
