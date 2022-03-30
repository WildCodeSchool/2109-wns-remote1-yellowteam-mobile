import { FlatList, SectionList, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import HomepageCardProject from '../components/Cards/HomepageCardProject';
import HomepageCardTask from '../components/Cards/HomepageCardTask';
import {
  useGetSelfProjectsQuery,
  useGetSelfTasksQuery,
} from '../generated/graphql';
import useReduxUserState from '../hooks/useUserState';

export default function HomeScreen() {
  const { user } = useReduxUserState();
  const { data: projectsData } = useGetSelfProjectsQuery({
    variables: { where: { project_owner_id: { equals: user.id } } },
  });
  const { data: tasksData } = useGetSelfTasksQuery({
    variables: { where: { id: user.id } },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>Welcome {user.first_name} 👋🏻</Text>
      <ScrollView>
        <View>
          <Text style={styles.title}>Recent projects</Text>
          {projectsData && projectsData.projects.length >= 1 ? (
            projectsData.projects.map((project) => {
              return <HomepageCardProject key={project.id} project={project} />;
            })
          ) : (
            <Text style={styles.text}>You have no project</Text>
          )}
        </View>
        <Text style={styles.title}>Recent tasks</Text>
        <View style={styles.listContainer}>
          {tasksData && tasksData.user.tasks ? (
            tasksData.user.tasks.map((task) => {
              return <HomepageCardTask key={task.id} task={task} />;
            })
          ) : (
            <Text style={styles.text}>You have no task</Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6F8',
  },
  textHeader: {
    fontFamily: 'Avenir-Heavy',
    fontSize: 20,
    marginLeft: 15,
    marginBottom: 18,
  },
  title: {
    fontFamily: 'Avenir-Heavy',
    fontSize: 18,
    marginLeft: 15,
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
