/* eslint-disable no-console */
import { StyleSheet, View } from 'react-native';

import { useTestSubscription } from '../generated/graphql';

export default function HomeScreen() {
  const { data } = useTestSubscription({
    onSubscriptionComplete: () => {
      console.log('complete');
    },
    shouldResubscribe: true,
    onSubscriptionData: ({ client, subscriptionData }) => {
      console.log('subscription =>', subscriptionData);
      console.log('sub client =>', client);
    },
  });
  console.log('sub response => ', data);
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
