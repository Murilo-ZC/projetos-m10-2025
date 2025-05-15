import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Card from '../components/Card';

const imagens = {
    0: "https://images.pexels.com/photos/32056657/pexels-photo-32056657/free-photo-of-black-and-white-close-up-of-a-farm-cow.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    1: "https://images.pexels.com/photos/17572427/pexels-photo-17572427/free-photo-of-cow-with-bell.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    2: "https://images.pexels.com/photos/33550/cows-curious-cattle-agriculture.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    3: "https://images.pexels.com/photos/551624/pexels-photo-551624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    4: "https://images.pexels.com/photos/30160395/pexels-photo-30160395/free-photo-of-close-up-portrait-of-a-brown-cow-in-green-pasture.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    5: "https://images.pexels.com/photos/31669033/pexels-photo-31669033/free-photo-of-tranquil-black-and-white-swans-on-a-lake.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    6: "https://images.pexels.com/photos/6771859/pexels-photo-6771859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    7: "https://images.pexels.com/photos/17826916/pexels-photo-17826916/free-photo-of-swan-flying-above-a-lake.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    8: "https://images.pexels.com/photos/16386700/pexels-photo-16386700/free-photo-of-swans-swimming-in-the-lake.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
}

export default function App() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <Text style={styles.texto}>Meu App de Imagens!</Text>
                    {
                        Array.from({ length: 100 }).map((_, i) => {
                            const url = imagens[i % Object.keys(imagens).length]; // repete ciclicamente
                            return <Card key={i} imageUrl={url} />;
                        })
                    }
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    texto: {
        fontSize: 42,
        color: '#c4c4c4',
        padding: 16,
    }
});
