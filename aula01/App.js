import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView }from 'react-native';
import { HeaderApp } from './components/HeaderApp';
import {FooterApp} from './components/FooterApp';
import {MainApp} from './components/MainApp';

export default function App() {
  return (
    <SafeAreaView style={{flex:1.0}}>
      <HeaderApp></HeaderApp>
      <MainApp></MainApp>
      <FooterApp></FooterApp>
    </SafeAreaView>
  );
}






