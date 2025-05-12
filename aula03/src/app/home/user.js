import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>User!</Text>
      <Link href="/" replace>Voltar para Raiz</Link>
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
