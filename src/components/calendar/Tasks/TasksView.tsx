import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useGetAllTasksByProjectQuery } from '../../../generated/graphql';
import { Spinner } from '@ui-kitten/components';
import { DateTime } from 'luxon';

export default function TasksView({ selectedDay }) {
  console.log(selectedDay);
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

  // const selectedDayFilter = () => data?.projects.map(i => i.tasks.filter(item => item.))

  if (loading) return <Spinner />;

  return (
    <View>
      <Text>TasksList</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
