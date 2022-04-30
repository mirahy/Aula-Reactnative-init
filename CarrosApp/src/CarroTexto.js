import React from 'react';
import {Text, StyleSheet, ScrollView, Button, View} from 'react-native';

export default props => {
  const carro = props.route.params.carro;

  const acaoVoltar = () => {
    props.navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.texto}>Modelo: {carro.modelo}</Text>
      <Text style={styles.texto}>Ano: {carro.ano}</Text>
      <View style={styles.containerBotao}>
        <Button onPress={acaoVoltar} title="Voltar" />
      </View>
    </ScrollView>
  );
};

let styles = StyleSheet.create({
  container: {},
  texto: {
    fontSize: 16,
    textAlign: 'center',
    color: 'black',
  },
  containerBotao: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  botao: {
    flex: 1,
  },
});
