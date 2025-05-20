import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Botao from '../components/botao';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Tela 2</Text>
      <Botao title="Vai para segunda tela"/>
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
