import { StyleSheet, Text } from 'react-native';

import { View } from '../components/Themed';
import useReduxAppState from '../hooks/useAppState';
import useReduxUserState from '../hooks/useUserState';

export default function HomeScreen() {
  const { user } = useReduxUserState();
  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>Welcome {user.first_name} 👋🏻</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textHeader: {
    fontFamily: 'Avenir-Heavy',
    fontSize: 20,
    marginLeft: 15,
  },
});
