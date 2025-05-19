// components/Card.js
import React, { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

/** Paleta base — pegue quantas cores quiser */
const PALETTE = [
  '#FF7A59', '#FFB05C', '#FFE074',
  '#4FACFE', '#38F9D7',
  '#A18CD1', '#FBC2EB',
  '#667EEA', '#764BA2',
];

/** Gera duas cores distintas aleatórias */
function getRandomGradient() {
  const idx1 = Math.floor(Math.random() * PALETTE.length);
  let idx2 = Math.floor(Math.random() * PALETTE.length);
  // garante cores diferentes
  while (idx2 === idx1) idx2 = Math.floor(Math.random() * PALETTE.length);
  return [PALETTE[idx1], PALETTE[idx2]];
}

export default function Card({ children, style }) {
  // memoiza para não trocar de cor a cada re-render
  const colors = useMemo(getRandomGradient, []);

  return (
    <LinearGradient colors={colors} style={[styles.container, style]}>
      <Text style={styles.text}>{children}</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: '50%',
    borderRadius: 16,
    padding: 20,
    marginVertical: 10,
    alignSelf: 'center',
    // sombra Android
    elevation: 3,
    // sombra iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  text: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
});
