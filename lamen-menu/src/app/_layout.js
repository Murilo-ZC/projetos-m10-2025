import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import { CustomHeader } from '../components/CustomHeader';

export default function LayoutBase() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ 
                flex: 1,
                backgroundColor: '#fc7a17' }}>
                <Stack screenOptions={{
                    // Define a cor de fundo do header
                    headerStyle: {
                        backgroundColor: '#fc7a17', // laranja claro
                    },
                    // Remove o título padrão (opcional)
                    headerTitle: '',
                    // Renderiza seu componente customizado no lugar do header
                    header: (props) => <CustomHeader {...props} />,
                }}>
                    <Stack.Screen name="index" options={{title:"Bem Vindo"}}/>
                    <Stack.Screen name="info" options={{title: "História do Lamen"}} />
                </Stack>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}