import { StyleSheet, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import RecentProjects from '../components/Projects/RecentProjects';
import RecentProjectsHeader from '../components/Projects/RecentProjects.header';
import RecentTasks from '../components/Tasks/RecentTasks';
import {
  useGetSelfProjectsQuery,
  useGetSelfTasksQuery,
} from '../generated/graphql';
import useReduxUserState from '../hooks/useUserState';

export default function HomeScreen({ navigate }) {
  const { user } = useReduxUserState();

  const { data: projectsData } = useGetSelfProjectsQuery({
    variables: { where: { project_owner_id: { equals: user.id } } },
  });
  const { data: tasksData } = useGetSelfTasksQuery({
    variables: { where: { id: user.id } },
  });

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.textHeader}>Welcome {user.first_name} 👋🏻</Text>
      <RecentProjectsHeader />
      <RecentProjects />
      <Text style={styles.title}>Recent tasks</Text>
      <RecentTasks />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    padding: 5,
  },
  contentContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textHeader: {
    fontFamily: 'Avenir-Heavy',
    fontSize: 20,
    marginVertical: 20,
  },
  title: {
    fontFamily: 'Avenir-Heavy',
    fontSize: 18,
    marginBottom: 8,
  },
  text: {
    fontFamily: 'Avenir',
    fontSize: 18,
    marginLeft: 15,
  },
  listContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
});
