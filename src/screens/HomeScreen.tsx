import { Icon, Spinner } from '@ui-kitten/components';
import { Image, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import { useGetSelfTasksStatusQuery } from '../generated/graphql';
import useReduxUserState from '../hooks/useUserState';

// function TaskPie({ finishedTasks, inProgressTasks, notStartedTasks }) {
//   return (
//     <VictoryPie
//       colorScale={['tomato', 'orange', 'gold', 'cyan', 'navy']}
//       padAngle={({ datum }) => datum.y}
//       innerRadius={35}
//       width={200}
//       height={200}
//       animate={{
//         onExit: {
//           duration: 500,
//           before: () => ({
//             _y: 0,
//             fill: 'orange',
//             label: 'BYE',
//           }),
//         },
//       }}
//       data={[
//         { x: 'Tasks completed', y: finishedTasks().length },
//         { x: 'Tasks in progress', y: inProgressTasks().length },
//         { x: 'Tasks not started', y: notStartedTasks().length },
//       ]}
//     />
//   );
// }

export default function HomeScreen() {
  const { user } = useReduxUserState();
  const { data, loading } = useGetSelfTasksStatusQuery({
    variables: {
      where: {
        id: user.id ? user.id : '',
      },
    },
  });

  if (!data || loading) return <Spinner />;
  // const finishedTasks = () =>
  //   data?.user.tasks.filter((task) => task.status_task === 'FIHISHED');
  // const inProgressTasks = () =>
  //   data?.user.tasks.filter((task) => task.status_task === 'IN_PROGRESS');
  // const notStartedTasks = () =>
  //   data?.user.tasks.filter((task) => task.status_task === 'NOT_STARTED');

  return (
    <View style={styles.container}>
      {user.id && (
        <View style={styles.card}>
          <Icon name="calendar" style={{ width: 50, height: 50 }} />
          <Text style={styles.textCard}>
            {`Welcome back ${user.first_name} ${user.last_name}`}
          </Text>

          <Image source={{ uri: user.avatar }} style={styles.avatar} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  container: {
    paddingVertical: 50,
    padding: 15,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  pie: {
    width: '50%',
  },
  textCard: {
    padding: 15,
    fontSize: 15,
    fontWeight: 'bold',
  },
  card: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
