
import { StyleSheet, Text, View } from 'react-native';
import Card from '../components/card';

export default function App() {
  return (
    <View style={styles.container}>
      <Card>Ola Tela 2!</Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
