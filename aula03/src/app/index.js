import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Tela Raiz!</Text>
      <Link href={'/segunda'}>Ir para Segunda Tela</Link>
      <Link href={'/home'}>Ir para Home</Link>
      <Link href={'/home/user'}>Ir para Home/User</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
