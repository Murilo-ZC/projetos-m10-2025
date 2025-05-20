import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Botao( {title, onPress, style} ) {
  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityLabel={title ?? ''}
      style={[styles.button, style]}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <Text style={styles.label}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24,
    backgroundColor: '#5568FE',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,          // sombra Android
    shadowColor: '#000',   // sombra iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    width:'80%',
    marginVertical: 8,
  },
  label: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});