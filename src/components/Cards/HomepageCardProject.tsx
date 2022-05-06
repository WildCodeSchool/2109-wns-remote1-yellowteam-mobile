import { StyleSheet, Text, View, Image } from 'react-native';
import { GetSelfProjectsQuery } from '../../generated/graphql';

interface Props {
  project?: GetSelfProjectsQuery['projects'][number];
}

const HomepageCardProject = ({ project }: Props) => {
  const bgColor = (status: string) => {
    if (status === 'IN_PROGRESS') {
      return '#F69826';
    }
    if (status === 'NOT_STARTED') {
      return '#9093DF';
    }
    if (status === 'FINISHED') {
      return '#FF3A3A';
    }
    return 'white';
  };

  return (
    <View
      style={{
        ...styles.listContainer,
        shadowColor: bgColor(project.status_project),
      }}
    >
      <Text style={styles.title}> {project?.title} </Text>
      <View style={styles.logos}>
        {project?.users.slice(0, 5).map((user) => (
          <Image
            key={user.id}
            style={styles.logo}
            source={{
              uri: user.avatar,
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
  );
};

export default HomepageCardProject;

const styles = StyleSheet.create({
  listContainer: {
    shadowOffset: {
      width: 0,
      height: 2,
    },
    marginHorizontal: 5,
    zIndex: 5,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: '#FFFF',
    borderColor: '#E0E0E0',
    borderStyle: 'solid',
    borderWidth: 1,
    display: 'flex',
    flexDirection: 'column',
    width: '95%',
    borderRadius: 12,
    padding: 14,
    marginVertical: 6,
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
