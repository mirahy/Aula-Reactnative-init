import React from 'react';
import { Text, ScrollView, View, Button, StyleSheet } from 'react-native';

export default props => {
  let carro = props.route.params.carro

  const botaoVoltar = () => {
    props.navigation.goBack()
  }

  return (
    <ScrollView>
      <Text style={styles.texto}>{carro.modelo}</Text>
      <Text style={styles.texto}>{carro.ano}</Text>

      <View style={styles.botaoContainer}>
        <Button
          style={styles.botao}
          title="Voltar"
          onPress={botaoVoltar}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  texto: {
    fontSize: 20,
    textAlign: 'center'
  },

  botaoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10
  },
  botao: {}
})