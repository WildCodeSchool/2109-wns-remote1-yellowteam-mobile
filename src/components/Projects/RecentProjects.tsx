import { DateTime } from 'luxon';
import { FlatList, StyleSheet, View } from 'react-native';
import { useGetSelfProjectsQuery } from '../../generated/graphql';
import useReduxUserState from '../../hooks/useUserState';
import HomepageCardProject from '../Cards/HomepageCardProject';

export default function RecentProjects() {
  const { user } = useReduxUserState();

  const { data: projectsData } = useGetSelfProjectsQuery({
    variables: {
      where: { project_owner_id: { equals: user.id } },
    },
  });

  if (!projectsData) return <View />;

  const slicedProjects = projectsData?.projects.slice(0, 4);

  return (
    <View style={styles.container}>
      {slicedProjects.map((project) => (
        <HomepageCardProject key={project.id} project={project} />
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
