import { SafeAreaView, SafeAreaProvider } from "react-native";

export default function LayoutBase(){
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{flex:1}}>
                <Stack screenOptions={{
                headerShown: false,   // oculta completamente o header
                // Se preferir manter o header mas sem título:
                //   headerTitle: '',
                }}>
                    
                </Stack>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}