// app/lamens.js
import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Image,
    FlatList,
    StyleSheet,
    ActivityIndicator,
    SafeAreaView,
    TouchableOpacity,
    Modal
} from 'react-native';

const SERVER = 'http://10.128.0.171:4000';

export default function Lamens() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // Novo estado para modal
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        async function fetchItems() {
            try {
                const res = await fetch(`${SERVER}/items`);
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                const json = await res.json();
                setItems(json);
            } catch (e) {
                setError(e.message);
            } finally {
                setLoading(false);
            }
        }
        fetchItems();
    }, []);

    if (loading) {
        return (
            <View style={styles.center}>
                <ActivityIndicator size="large" />
            </View>
        );
    }
    if (error) {
        return (
            <View style={styles.center}>
                <Text style={styles.error}>Erro: {error}</Text>
            </View>
        );
    }
    if (!items) {
        return (
            <View style={styles.center}>
                <Text style={styles.error}>Nenhum dado disponível</Text>
            </View>
        );
    }

    const openModal = (item) => {
        setSelectedItem(item);
        setModalVisible(true);
    };

    const renderCard = ({ item }) => (
        <TouchableOpacity onPress={() => openModal(item)}>
            <View style={styles.card}>
                <Image
                    source={{ uri: `${SERVER}${item.imagem}` }}
                    style={styles.image}
                    resizeMode="cover"
                />
                <View style={styles.info}>
                    <Text style={styles.title}>{item.nome}</Text>
                    <Text style={styles.price}>R$ {item.preco.toFixed(2)}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={items}
                keyExtractor={(item) => item.id}
                renderItem={renderCard}
                contentContainerStyle={styles.list}
                showsVerticalScrollIndicator={false}
            />

            {/* Modal de detalhes */}
            <Modal
                visible={modalVisible}
                transparent
                animationType="slide"
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        {selectedItem && (
                            <>
                                <Image
                                    source={{ uri: `${SERVER}${selectedItem.imagem}` }}
                                    style={styles.modalImage}
                                    resizeMode="cover"
                                />
                                <Text style={styles.modalTitle}>{selectedItem.nome}</Text>
                                <Text style={styles.modalDescription}>
                                    {selectedItem.descricao}
                                </Text>
                                <Text style={styles.modalPrice}>
                                    R$ {selectedItem.preco.toFixed(2)}
                                </Text>
                            </>
                        )}
                        <TouchableOpacity
                            style={styles.closeButton}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={styles.closeButtonText}>Fechar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    list: {
        padding: 16,
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    error: {
        color: 'red',
    },
    card: {
        backgroundColor: '#fafafa',
        borderRadius: 8,
        marginBottom: 16,
        overflow: 'hidden',
        // sombra (iOS)
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        // sombra (Android)
        elevation: 3,
    },
    image: {
        width: '100%',
        height: 150,
        backgroundColor: '#eee',
    },
    info: {
        padding: 12,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 4,
        color: '#333',
    },
    description: {
        fontSize: 14,
        lineHeight: 20,
        color: '#666',
        marginBottom: 8,
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFA07A', // laranja do header
    },
    button: {
        backgroundColor: '#FFA07A',
        paddingVertical: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '500',
    },
    /* Estilos do Modal */
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)', // fundo semitransparente
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        width: '85%',
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
    },
    modalImage: { width: '100%', height: 180, borderRadius: 4, marginBottom: 12 },
    modalTitle: { fontSize: 20, fontWeight: '700', marginBottom: 8, color: '#333' },
    modalDescription: { fontSize: 16, lineHeight: 22, color: '#555', marginBottom: 12 },
    modalPrice: { fontSize: 18, fontWeight: 'bold', color: '#FFA07A', marginBottom: 16 },

    closeButton: {
        backgroundColor: '#FFA07A',
        paddingVertical: 10,
        borderRadius: 6,
        alignItems: 'center',
    },
    closeButtonText: { color: '#fff', fontSize: 16, fontWeight: '500' },
});
