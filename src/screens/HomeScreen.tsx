import { StyleSheet, Text } from 'react-native';

import { View } from '../components/Themed';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>home screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
