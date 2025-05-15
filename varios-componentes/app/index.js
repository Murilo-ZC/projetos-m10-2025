import { StyleSheet, Text, View, SafeAreaView, TextInput, Pressable, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react';
import { Picker } from '@react-native-picker/picker';
import { useRouter } from 'expo-router';

function chamarSegundaTela(texto, valorSelecionado){
    // Pega o router
    const router = useRouter();
    if (texto.trim() === '') {
      Alert.alert('Campo obrigatório', 'Por favor, preencha o campo.');
    } else {
      // Envia o app para a próxima tela
      router.push({pathname:"/lista", params:{nome:texto, cavaleiro:valorSelecionado}});
    }
}

export default function App() {
    const [texto, onChangeTexto] = React.useState('');
    const [valorSelecionado, setValorSelecionado] = React.useState('');
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <View>
                    <Text style={styles.texto}>Dados do Usuário</Text>
                    <TextInput
                        value={texto}
                        placeholder='Informe seu nome'
                        onChangeText={onChangeTexto}
                        style={styles.input}
                    />
                    
                    <Picker
                        selectedValue={valorSelecionado}
                        onValueChange={(itemValue, itemIndex) => {
                            setValorSelecionado(itemValue);
                        }}>
                        <Picker.Item label="Áries" value="Mu" />
                        <Picker.Item label="Touro" value="Aldebaran" />
                        <Picker.Item label="Gêmeos" value="Saga" />
                        <Picker.Item label="Câncer" value="Máscara da Morte" />
                        <Picker.Item label="Leão" value="Aiolia" />
                        <Picker.Item label="Virgem" value="Shaka" />
                        <Picker.Item label="Libra" value="Dohko" />
                        <Picker.Item label="Escorpião" value="Milo" />
                        <Picker.Item label="Sagitário" value="Aiolos" />
                        <Picker.Item label="Capricórnio" value="Shura" />
                        <Picker.Item label="Aquário" value="Camus" />
                        <Picker.Item label="Peixes" value="Afrodite" />
                    </Picker>

                    <TouchableOpacity style={styles.botao} onPress={()=>chamarSegundaTela(texto, valorSelecionado)}>
                        <Text style={styles.textoBotao}>Enviar Os Dados</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingVertical: '20',
    },
    texto: {
        fontSize: 42,
        color: '#c4c4c4',
        padding: 16,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    botao: {
        padding: 8,
        margin: 10,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#f0f0f0',
        backgroundColor: '#797979',
        borderRadius: 20,
    },
    textoBotao: {
        fontSize: 24,
        color: '#c4c4c4',
        padding: 16,
    },
});
