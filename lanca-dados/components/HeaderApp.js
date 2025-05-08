import { View, Text, Image, StyleSheet } from 'react-native';

export function HeaderApp() {
    return (
        <View style={estilos.header}>
            <Image source={require('../assets/images/reiDadoLogo.jpg')} style={estilos.imagemLogo}/>
            <Text style={estilos.headerText}>Lançador D6</Text>
        </View>
    );
}

const estilos = StyleSheet.create(
    {
        header: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 16,
            paddingVertical: 8,
            backgroundColor: '#f8f8f8',
            height: 64,
            backgroundColor: '#ef1111'
        },
        imagemLogo:{
            height:48,
            width:48,
            contentFit: 'contain',
            padding:4,
            borderRadius: 24,
            overflow:'hidden',
        },
        headerText : {
            fontSize: 30,
            color: '#ececec',
            fontWeight: 'bold',
        }
    }
);