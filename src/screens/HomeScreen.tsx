import {
  FlatList,
  ScrollViewBase,
  SectionList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
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
    <ScrollView style={styles.container}>
      <Text style={styles.textHeader}>Welcome {user.first_name} 👋🏻</Text>
      <Text style={styles.title}>Recent projects</Text>
      <FlatList
        contentContainerStyle={styles.contentContainer}
        data={projectsData?.projects}
        renderItem={({ item }) => <HomepageCardProject project={item} />}
      />

      <Text style={styles.title}>Recent tasks</Text>
      <View style={styles.listContainer}>
        <FlatList
          contentContainerStyle={styles.contentContainer}
          data={tasksData?.user.tasks}
          renderItem={({ item }) => <HomepageCardTask task={item} />}
        />
      </View>
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
    alignItems: 'stretch',
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
