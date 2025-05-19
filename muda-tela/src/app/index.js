import { router } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import Botao from '../components/botao';

function vaiParaSegundaTela(){
  return router.navigate('/segunda_tela');
}

function vaiParaUol(){
  return router.navigate('https://uol.com.br');
}

function chamarUber(){
  return router.navigate('uber://riderequest')
}

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={styles.header}>Minha Tela Inicial</Text>
      </View>
      <Botao title="Vai para Segunda Tela" onPress={vaiParaSegundaTela}/>
      <Botao title="Vai para o site do UOL" onPress={vaiParaUol}/>
      <Botao title="Chama o Uber" onPress={chamarUber}/>
      <Botao title="Vai para tela com abas"/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  containerHeader:{
    backgroundColor:'#eee1e4',
    width:'100%',
    marginBottom: 24,
  },
  header: {
      fontSize: 32,                      // tamanho grande
      fontWeight: '700',                 // negrito moderado
      color: '#262B40',
      paddingHorizontal: 16,             // respiro lateral
      paddingVertical: 12,
      letterSpacing: 0.5,                // leve espaçamento entre letras
      textAlign: 'center',               // centralizar (opcional)
  },
});
