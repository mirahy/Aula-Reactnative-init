import React from 'react';
import {StyleSheet, ScrollView, View, Image} from 'react-native';

export default props => {
  const carro = props.route.params.carro;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerFoto}>
        <Image source={carro.foto} style={styles.foto} />
      </View>
    </ScrollView>
  );
};

let styles = StyleSheet.create({
  container: {},
  containerFoto: {
    backgroundColor: 'white',
    flexDirection: 'row',
    marginBottom: 10,
  },
  foto: {
    flex: 1,
    aspectRatio: 1,
    resizeMode: 'contain',
  },
});
