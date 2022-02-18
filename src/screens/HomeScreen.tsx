import { Button, Spinner } from '@ui-kitten/components';
import { AsyncStorage, StyleSheet } from 'react-native';
import { VictoryPie } from 'victory-native';
import { Text, View } from '../components/Themed';
import { useGetSelfTasksStatusQuery } from '../generated/graphql';
import useReduxUserState from '../hooks/useUserState';

export default function HomeScreen() {
  const { user, dispatchLogout } = useReduxUserState();
  const { data, loading, refetch } = useGetSelfTasksStatusQuery({
    variables: {
      where: {
        id: user.id ? user.id : '',
      },
    },
  });

  if (!data || loading) return <Spinner />;
  const finishedTasks = () =>
    data?.user.tasks.filter((task) => task.status_task === 'FIHISHED');
  const inProgressTasks = () =>
    data?.user.tasks.filter((task) => task.status_task === 'IN_PROGRESS');
  const notStartedTasks = () =>
    data?.user.tasks.filter((task) => task.status_task === 'NOT_STARTED');

  return (
    <View style={styles.container}>
      <Button
        onPress={async () => {
          dispatchLogout();
          await AsyncStorage.setItem('x-authorization', '');
          await refetch();
        }}
      >
        Logout
      </Button>
      <View>
        <VictoryPie
          colorScale={['tomato', 'orange', 'gold', 'cyan', 'navy']}
          padAngle={({ datum }) => datum.y}
          innerRadius={35}
          width={200}
          height={200}
          animate={{
            onExit: {
              duration: 500,
              before: () => ({
                _y: 0,
                fill: 'orange',
                label: 'BYE',
              }),
            },
          }}
          data={[
            { x: 'Tasks completed', y: finishedTasks().length },
            { x: 'Tasks in progress', y: inProgressTasks().length },
            { x: 'Tasks not started', y: notStartedTasks().length },
          ]}
        />
      </View>

      <Text style={styles.title}>HELLO THERE !</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  pie: {
    width: '50%',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
