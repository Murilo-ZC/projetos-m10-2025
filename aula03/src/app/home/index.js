import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Home!</Text>
      <Link href="/home/user">Ir Para User</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9fc5e8',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
