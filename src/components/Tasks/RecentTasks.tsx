import { DateTime } from 'luxon';
import { FlatList, StyleSheet, View } from 'react-native';
import {
  useGetSelfProjectsQuery,
  useGetSelfTasksQuery,
} from '../../generated/graphql';
import useReduxUserState from '../../hooks/useUserState';
import HomepageCardProject from '../Cards/HomepageCardProject';
import HomepageCardTask from '../Cards/HomepageCardTask';

export default function RecentTasks() {
  const { user } = useReduxUserState();

  const { data: tasksData } = useGetSelfTasksQuery({
    variables: { where: { id: user.id } },
  });

  if (!tasksData) return <View />;

  const slicedTasks = tasksData?.user.tasks.slice(0, 4);

  return (
    <View style={styles.container}>
      {slicedTasks.map((task) => (
        <HomepageCardTask key={task.id} task={task} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
