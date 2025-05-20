import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Botao from '../../components/botao';
import { router } from 'expo-router';

function vaiParaSegundaTela(){
    router.navigate("/tela_dois");
}

function abreUber(){
    router.navigate("uber://riderequest")
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Multi tela v2</Text>
      <Botao title="Vai para segunda tela" onPress={vaiParaSegundaTela}/>
      <Botao title="Abre o Uber" onPress={abreUber} />
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
