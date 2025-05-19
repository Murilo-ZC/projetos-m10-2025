// /src/app/_layout.js
import { Stack } from 'expo-router';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

/**
 * Root layout do diretório `/src/app/`.
 * – Envolve toda a aplicação com `SafeAreaProvider`.
 * – Cria uma Stack sem cabeçalhos/títulos.
 */
export default function RootLayout() {
  return (
    <SafeAreaProvider>
        <SafeAreaView style={{flex:1}}>
            <Stack
                screenOptions={{
                headerShown: false,   // oculta completamente o header
                // Se preferir manter o header mas sem título:
                //   headerTitle: '',
                }}
            />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}