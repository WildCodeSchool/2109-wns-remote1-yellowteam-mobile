import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { useGetSelfProjectsQuery } from '../../generated/graphql';
import useReduxUserState from '../../hooks/useUserState';

export default function RecentProjectsHeader() {
  const { user } = useReduxUserState();
  const { navigate } = useNavigation();

  const { data: projectsData } = useGetSelfProjectsQuery({
    variables: { where: { project_owner_id: { equals: user.id } } },
  });

  if (!projectsData) return <Text>Loading ...</Text>;

  return (
    <View style={styles.constainer}>
      <Text style={styles.text}>Recent projects</Text>
      <Text
        onPress={() => navigate('Projects')}
        style={{ textDecorationLine: 'underline' }}
      >
        See All ( {`${projectsData.projects.length}`} )
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  constainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Avenir-Heavy',
    fontSize: 18,
    marginBottom: 8,
  },
});
