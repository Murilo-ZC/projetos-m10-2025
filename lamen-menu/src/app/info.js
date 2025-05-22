// app/sobre.js
import React, { useEffect, useState } from 'react';
import { 
  View, 
  Text, 
  Image, 
  ScrollView, 
  StyleSheet, 
  TouchableOpacity, 
  ActivityIndicator 
} from 'react-native';
import * as WebBrowser from 'expo-web-browser';

const meuServer = 'http://10.128.0.171:4000'

export default function Sobre() {
  const [hist, setHist] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchHist() {
      try {
        const res = await fetch(`${meuServer}/hist`); // ← ajuste para sua URL
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        setHist(json);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }
    fetchHist();
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
  if (!hist) {
  return (
    <View style={styles.center}>
      <Text style={styles.error}>Nenhum dado disponível</Text>
    </View>
  );
    }
  console.log(`error: ${error} loading: ${loading} hist: ${hist}`)
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Imagem */}
      <Image 
        source={{ uri: `${meuServer}${hist.imagem}` }} 
        style={styles.image} 
        resizeMode="cover"
      />

      {/* Texto */}
      <Text style={styles.text}>
        {hist.origem}
      </Text>

      {/* Botão para abrir vídeo */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => WebBrowser.openBrowserAsync(hist.video)}
      >
        <Text style={styles.buttonText}>Ver vídeo sobre a história</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  center: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    color: 'red',
  },
  image: {
    width: '100%', 
    height: 200, 
    borderRadius: 8, 
    marginBottom: 16,
    backgroundColor: '#eee',
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#FFA07A', // mesmo laranja do header
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 32,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
