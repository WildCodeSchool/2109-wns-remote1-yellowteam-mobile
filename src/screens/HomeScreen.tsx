import { useRoute } from '@react-navigation/native';
import { Button, Card, Icon, Spinner } from '@ui-kitten/components';
import { useEffect, useRef } from 'react';
import { Image, StyleSheet, Animated } from 'react-native';
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
  });
  const route = useRoute();
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

  if (!data || loading) return <Spinner />;

  const finishedTasks = () =>
    data?.user.tasks.filter((task) => task.status_task === 'FIHISHED');

  return (
    <View style={styles.container}>
      {user.id && (
        <Animated.View
          style={[
            styles.fadingContainer,
            {
              translateY: slideAnim,
            },
          ]}
        >
          <View style={styles.card}>
            <Image source={{ uri: user.avatar }} style={styles.avatar} />
            <Text style={styles.textCard}>
              {`Welcome back ${user.first_name} ${user.last_name}`}
            </Text>
          </View>
        </Animated.View>
      )}
      <Pie
        tasksDatas={{
          complete: finishedTasks().length,
          total: data.user.tasks.length,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  fadingContainer: {
    zIndex: 999,
    width: '100%',
    position: 'absolute',
    backgroundColor: 'powderblue',
  },
  container: {
    position: 'absolute',
    zIndex: 999,
    backgroundColor: 'white',
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
    color: 'white',
  },
  card: {
    borderRadius: 5,
    color: 'white',
    padding: 10,
    position: 'absolute',
    top: -50,
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
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: '#DC30FF',
    justifyContent: 'space-around',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
