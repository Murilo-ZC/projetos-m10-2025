import {View, Text} from 'react-native'

export function HeaderApp(){
  return(
    <View style={{
      flex:0.1,
      backgroundColor:'#1212ea',
      marginVertical:24,
    }}>
      <Text style={{
        fontSize:40,
        color:'#ececec',
      }}>HEADER DO APP</Text>
    </View>
  );
}