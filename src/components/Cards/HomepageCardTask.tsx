import { StyleSheet, Text, View, Image } from 'react-native';
import {
  GetSelfProjectsQuery,
  GetSelfTasksQuery,
} from '../../generated/graphql';

interface Props {
  task?: GetSelfTasksQuery['user']['tasks'][number];
}

const HomepageCardTask = ({ task }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <Text style={styles.title}> {task?.title} </Text>
        <View style={styles.logos}>
          <Image
            key={task?.id}
            style={styles.logo}
            source={{
              uri: task?.user.avatar,
            }}
          />
        </View>
        <Text numberOfLines={2} style={styles.text}>
          {task?.description}
        </Text>
      </View>
    </View>
  );
};

export default HomepageCardTask;

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
