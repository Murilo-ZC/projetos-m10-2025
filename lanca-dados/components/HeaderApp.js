import { View, Text, Image, StyleSheet } from 'react-native';

export function HeaderApp() {
    return (
        <View style={estilos.header}>
            <Text>Lançador D6</Text>
        </View>
    );
}

const estilos = StyleSheet.create(
    {
        header: {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 16,
            paddingVertical: 8,
            backgroundColor: '#f8f8f8',
            height: 64
        }
    }
);