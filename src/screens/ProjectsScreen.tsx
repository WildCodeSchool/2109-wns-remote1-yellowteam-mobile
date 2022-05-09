import { StyleSheet, Text, View } from 'react-native';

import useReduxAppState from '../hooks/useAppState';
import useReduxUserState from '../hooks/useUserState';

export default function ProjectsScreen() {
  const { user } = useReduxUserState();
  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>Projects screen</Text>
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
