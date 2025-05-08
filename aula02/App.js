import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { HeaderApp } from './components/HeaderApp';
import { Jogo } from './app/Jogo';

export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
      <HeaderApp></HeaderApp>
      <Jogo></Jogo>
    </SafeAreaView>
  );
}


