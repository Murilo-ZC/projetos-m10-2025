import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { Botao } from '../components/Botao';
import { router } from 'expo-router';

function mudarParaInfo(){
    router.navigate("/info")
}

function mudarParaHome(){
    router.navigate("/home/items");
}

export default function TelaPrincipal() {
    return (
        <View style={estilo.fundoContainer}>
            <Image source={require("../../assets/images/lamen-logo.png")} resizeMode='cover' style={{width:'100%', height:'60%'}}/>
            <Botao texto={"Iniciar"} funcao={mudarParaHome}/>
            <Botao texto={"Sobre"} funcao={mudarParaInfo}/>
        </View>
    );
}

const estilo = StyleSheet.create(
    {
        fundoContainer: {
            backgroundColor: '#fa883c',
            flex: 1,
            padding: 16,
            alignItems: 'center',
            justifyContent: 'center',
        },
    }
);