import { Text,View,Image,StyleSheet,TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const imagensDados = {
    0: require('../assets/images/dados_00.png'),
    1: require('../assets/images/dados_01.png'),
    2: require('../assets/images/dados_02.png'),
    3: require('../assets/images/dados_03.png'),
    4: require('../assets/images/dados_04.png'),
    5: require('../assets/images/dados_05.png'),
    6: require('../assets/images/dados_06.png'),
  };
  

export function MainScreen(){
    // Estado para guardar o número do dado atualmente exibido.
  // Começa mostrando a face 1 do dado.
  const [faceAtualDado, setFaceAtualDado] = useState(0);

  // Função para "rolar" o dado
  const rolarDado = () => {
    // Gera um número aleatório entre 1 e 6
    const numeroSorteado = Math.floor(Math.random() * 6) + 1;
    setFaceAtualDado(numeroSorteado);
  };
    return (
        <View style={estilos.container}>
            <Image source={imagensDados[faceAtualDado]} style={estilos.image}/>
            <TouchableOpacity style={estilos.botaoContainer} onPress={rolarDado}>
                <Text style={estilos.botaoTexto}>Rolar!</Text>
            </TouchableOpacity>
        </View>
    );
}



const estilos = StyleSheet.create(
    {
        container:{
            flex: 1,
            backgroundColor: '#ececec',
            justifyContent: 'space-evenly',
            alignContent: 'center',
            alignItems: 'center'
        },
        image:{
            height:'80%',
            width:'80%',
            resizeMode: 'contain',
            padding:4,
            borderRadius: '35%',
            overflow:'hidden',
        },
        botaoContainer:{
            backgroundColor: '#007bff',
            width: '80%',
            paddingVertical: 12,
            paddingHorizontal: 25,
            borderRadius: 8,
            elevation: 2,
            marginBottom: 15,
        },
        botaoTexto:{
            fontSize: 20,
            color: '#ececec',
            fontWeight: 'bold',
            textAlign: 'center',
        },
    }
);