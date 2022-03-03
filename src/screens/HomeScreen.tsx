import { gql } from '@apollo/client';
import { StyleSheet } from 'react-native';
import { View } from '../components/Themed';
import { useTestSubscription } from '../generated/graphql';

export default function HomeScreen() {
  const { data, loading, error } = useTestSubscription({
    onSubscriptionComplete: () => {
      console.log('complete');
    },
    shouldResubscribe: true,
    onSubscriptionData: ({ client, subscriptionData }) => {
      console.log('dataaaa  sub', subscriptionData);
    },
  });
  console.log(data);
  return (
    <View style={styles.container}>{/* <Text>{data && data}</Text> */}</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    height: '100%',
  },
});
