// src/CarroItem.js

import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableHighlight} from 'react-native';
import { BASE_FOTO } from './service/api';

const alt = 40;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    margin: 5
  },
  foto: {
    height: alt,
    width: alt,
    borderRadius: alt/2,
    backgroundColor: '#DDDDDD'
  },
  titulo: {
    lineHeight: alt,
    marginLeft: 10,
    flex: 1
  }
})

const CarroItem = props => {
  let foto
  if (props.foto === null) {
    foto = require('../assets/carro.png')
  } else {
    foto = { uri: BASE_FOTO + props.foto }
  }

  return (
    <TouchableHighlight
      onPress={() => props.onPress(props.id)}>
    <View style={styles.container}>
      <Image
        style={styles.foto}
        source={foto}
      />
      <Text
        style={styles.titulo}
        numberOfLines={1}
      >{props.titulo}</Text>
    </View>
    </TouchableHighlight>
  )
}

export default CarroItem;