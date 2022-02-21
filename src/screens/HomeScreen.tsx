import { useRoute } from '@react-navigation/native';
import { Button, Card, Icon, Spinner } from '@ui-kitten/components';
import { useEffect, useRef } from 'react';
import { Image, StyleSheet, Animated } from 'react-native';
import SkeletonContent from 'react-native-skeleton-content';
import Pie from '../components/Pie';
import { Text, View } from '../components/Themed';
import { useGetSelfTasksStatusQuery } from '../generated/graphql';
import useReduxUserState from '../hooks/useUserState';

export default function HomeScreen({ navigation }) {
  const slideAnim = useRef(new Animated.Value(0)).current;
  const { user } = useReduxUserState();
  const { data, loading } = useGetSelfTasksStatusQuery({
    variables: {
      where: {
        id: user.id ? user.id : '',
      },
    },
    onError: (err) => console.log(err),
  });

  const slideIn = () => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const slideOut = () => {
    Animated.timing(slideAnim, {
      toValue: -9990,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    slideIn();

    return function cleanup() {
      slideOut();
    };
  }, [navigation]);

  const finishedTasks = () =>
    data && data?.user.tasks.filter((task) => task.status_task === 'FIHISHED');

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={{ uri: user.avatar }} style={styles.avatar} />
        <SkeletonContent
          isLoading={loading}
          containerStyle={{ flex: 1, width: '100%' }}
          layout={[{ key: '1', width: '100%', height: 40, marginVertical: 2 }]}
        >
          <Text style={styles.textCard}>
            {`Welcome back ${user.first_name} ${user.last_name}`}
          </Text>
        </SkeletonContent>
      </View>

      <SkeletonContent
        isLoading={loading}
        containerStyle={{ flex: 1, width: '100%' }}
        layout={[
          { key: '1', width: '100%', height: 80, marginVertical: 2 },
          { key: '2', width: '100%', height: 50, marginVertical: 2 },
          { key: '3', width: '100%', height: 60, marginVertical: 2 },
        ]}
      >
        <Pie
          tasksDatas={{
            complete: data && finishedTasks().length,
            total: data && data.user.tasks.length,
          }}
        />
      </SkeletonContent>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  fadingContainer: {
    width: '100%',
    backgroundColor: 'powderblue',
  },
  container: {
    width: '100%',

    backgroundColor: '#F3F3F3F3',
    paddingHorizontal: 15,
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
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    marginHorizontal: 15,
  },
  card: {
    marginVertical: 10,
    borderRadius: 5,
    color: 'white',
    paddingHorizontal: 60,
    paddingVertical: 20,
    top: 0,
    borderWidth: 0,
    zIndex: 9999,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: 'space-around',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
