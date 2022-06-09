import React from 'react';
import { ScrollView, View, Image, StyleSheet } from 'react-native';
import { BASE_FOTO } from './service/api';

export default props => {
  let carro = props.route.params.carro

  /*let foto
  if (props.foto === null) {
    foto = require('../assets/carro.png')
  } else {
    foto = { uri: BASE_FOTO + props.foto }
  }*/
  let foto = (carro.figura === null) ?
    require('../assets/carro.png') :
    { uri: BASE_FOTO + carro.figura };

  return (
    <ScrollView>
      <View style={styles.fotoContainer}>
        <Image
          style={styles.foto}
          source={foto}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({

  fotoContainer: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    marginBottom: 10
  },
  foto: {
    flex: 1,
    aspectRatio: 1,
    resizeMode: 'contain'
  }

})