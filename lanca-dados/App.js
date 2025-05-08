import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';
import { MainScreen } from './app/MainScreen';
import { HeaderApp } from './components/HeaderApp';

export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
      <HeaderApp></HeaderApp>
      <MainScreen></MainScreen>
    </SafeAreaView>
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
