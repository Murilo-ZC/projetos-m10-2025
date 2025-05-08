import { View, Text, Image, StyleSheet } from 'react-native';

export function HeaderApp(){
    return (
        <View style={estilos.headerContainer}>
            <Image source={require('../assets/images/icone.png')} style={estilos.imageLogo}/>
            <Text style={estilos.headerText}>Pedra, Papel, Tesoura</Text>
        </View>
    );
}

const estilos = StyleSheet.create(
    {
        headerContainer : {
            flexDirection:'row',
            paddingHorizontal : 16,
            paddingVertical:8,
            justifyContent:'space-between',
            alignItems:'center',
            height:64,
            backgroundColor: '#c1c1c1',
        },
        imageLogo:{
            width:48,
            height:48,
        },
        headerText:{
            fontSize:20,
            fontWeight:'bold',
            color:'#fefefe',

        }
    }
);