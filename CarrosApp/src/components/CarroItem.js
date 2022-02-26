import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';

const alt = 40;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#AAAAAA',
    marginTop: 10,
  },
  foto: {
    height: alt,
    width: alt,
    borderRadius: alt / 2,
  },
  titulo: {
    lineHeight: alt,
    marginLeft: 10,
    color: '#000000',
    flex: 1,
  },
});

const CarroItem = () => (
  <View style={styles.container}>
    <Image
      style={styles.foto}
      source={require('../assets/fotoPerfilGen.jpg')}
    />
    <Text numberOfLines={1} style={styles.titulo}>
      CarroItemCarroItemCarroItemCarroItemCarroItemCarroItemCarroItem
    </Text>
  </View>
);

export default CarroItem;
