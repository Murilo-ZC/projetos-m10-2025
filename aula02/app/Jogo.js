import {View, Image, StyleSheet, TouchableOpacity, Text} from 'react-native';
import React, {useState} from 'react';

const imagens = {
    1: require('../assets/images/papel.png'),
    2: require('../assets/images/pedra.png'),
    3: require('../assets/images/tesoura.png'),
    4: require('../assets/images/reiDado.png'),
};

export function Jogo(){
    const [jogado,setJogado] = useState(1);
    return (
        <View style={estilos.container}>
            <Image source={imagens[jogado]} style={estilos.imagem}/>
            <View style={estilos.linhaBotoes}>
                <TouchableOpacity style={estilos.botao} onPress={()=>{
                    setJogado(1)
                }}>
                    <Image source={imagens[1]} style={estilos.imagemBotao}/>
                    <Text style={estilos.textoBotao}>Papel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={estilos.botao} onPress={()=>{
                    setJogado(2)
                }}>
                    <Image source={imagens[2]} style={estilos.imagemBotao}/>
                    <Text style={estilos.textoBotao}>Pedra</Text>
                </TouchableOpacity>
                <TouchableOpacity style={estilos.botao} onPress={()=>{
                    setJogado(3)
                }}>
                    <Image source={imagens[3]} style={estilos.imagemBotao}/>
                    <Text style={estilos.textoBotao}>Tesoura</Text>
                </TouchableOpacity>
                <TouchableOpacity style={estilos.botao} onPress={()=>{
                    setJogado(Math.round(Math.random()*2+1))
                }}>
                    <Image source={imagens[4]} style={estilos.imagemBotao}/>
                    <Text style={estilos.textoBotao}>Dado</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const estilos = StyleSheet.create(
    {
        container:{
            flex:1,
            justifyContent:'center',
            alignContent:'space-evenly',
            alignItems:'center',
            backgroundColor: '#cceecc',
        },  
        imagem:{
          width:'70%',
          height:'70%',  
          resizeMode: 'contain',
        },
        linhaBotoes:{
            flexDirection:'row',
            justifyContent:'space-evenly',
        },
        imagemBotao:{
            width:72,
            height:72,
            resizeMode:'contain',
        },
        textoBotao:{
            fontSize:20,
            color:'#000',
            textAlign:'center',
        },
        botao:{
            backgroundColor:'#fff',
            padding:8,
            borderRadius:4,
            borderColor:'#000',
            borderWidth:1,
            marginHorizontal:4,
        }
    }
);