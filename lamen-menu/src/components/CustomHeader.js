// components/CustomHeader.js
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export function CustomHeader({ navigation, route, options, back }) {
  return (
    <View style={styles.container}>
      {back ? (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>‹ Voltar</Text>
        </TouchableOpacity>
      ) : null}
      <Text style={styles.title}>
        {options.title ?? route.name}
      </Text>
      {/* Você pode adicionar botões, ícones, avatar etc. */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    // Garanta que coincida com o headerStyle do Stack
    backgroundColor: '#fc7a17',
  },
  backButton: {
    fontSize: 18,
    color: '#fff',
    marginRight: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});
