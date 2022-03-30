import { StyleSheet, Text, View, Image } from 'react-native';
import {
  GetSelfProjectsQuery,
  GetSelfTasksQuery,
} from '../../generated/graphql';

interface Props {
  project?: GetSelfProjectsQuery['projects'][number];
}

const HomepageCardProject = ({ project }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <Text style={styles.title}> {project?.title} </Text>
        <View style={styles.logos}>
          {project?.users.slice(0, 7).map((project) => (
            <Image
              key={project.id}
              style={styles.logo}
              source={{
                uri: project.avatar,
              }}
            />
          ))}
          {project && project.users.length > 7 ? (
            <Text>+ {project.users.length - 7}</Text>
          ) : null}
        </View>
        <Text numberOfLines={2} style={styles.text}>
          {project?.description}
        </Text>
      </View>
    </View>
  );
};

export default HomepageCardProject;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  listContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '90%',
    borderRadius: 12,
    padding: 14,
    margin: 6,
    backgroundColor: '#FFF',
  },
  title: {
    fontFamily: 'Avenir-Heavy',
    fontSize: 18,
    marginBottom: 8,
  },
  logos: {
    display: 'flex',
    flexDirection: 'row',
  },
  logo: {
    width: 30,
    height: 30,
    borderRadius: 100,
    marginRight: -8,
  },
  text: {
    fontFamily: 'Avenir',
    fontSize: 18,
  },
});
