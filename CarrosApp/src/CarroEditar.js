import React, { useState, useEffect } from 'react'
import { ActivityIndicator, Alert, Button, StyleSheet,
  Text, TextInput, View } from "react-native"

import { getCarro, updCarro } from './service/CarroService';

export default props => {

  const [isLoading, setIsLoading] = useState(true);
  const [carro, setCarro] = useState(null);

  const [placa, setPlaca] = useState('PLACA')
  const [modelo, setModelo] = useState('MODELO')
  const [ano, setAno] = useState('ANO')

  const id = props.route.params.id

  const jsxLoading = () => (
    <View style={styles.container}>
      <ActivityIndicator style={styles.loading} size="large" />
    </View>
  )

  useEffect(() => {
    getCarro(id)
    .then(carro => {
      console.log(carro)
      setCarro(carro)
      setIsLoading(false)

      setPlaca(carro.placa)
      setModelo(carro.modelo)
      setAno(String(carro.ano))
    })
    .catch(error => console.log(error))
  }, [])

  const mostrarAlerta = msg => {
    Alert.alert(
      "Alerta",
      msg,
      [{ text: "Ok", style: "cancel" }],
      { cancelable: true }
    )
  }

  const onSalvarClicked = () => {
    if (placa == '') {
      mostrarAlerta('Informe a PLACA')
      return
    } else if (modelo == '') {
      mostrarAlerta('Informe o MODELO')
      return
    } else if (!(parseInt(ano) > 1950)) {
      mostrarAlerta('Informe o ANO')
      return
    }

    const novoCarro = {
      id,
      marca_id: carro.marca_id,
      placa,
      modelo,
      ano
    }

    setIsLoading(true)
    updCarro(novoCarro)
    .then(carro => {
      mostrarAlerta('Carro atualizado!')
      // setIsLoading(false)
      props.navigation.goBack()
    })
  }
  
  if (isLoading) {
    return jsxLoading()
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Placa</Text>
      <TextInput style={styles.input}
        onChangeText={setPlaca}
        value={placa}
        />

      <Text style={styles.label}>Modelo</Text>
      <TextInput style={styles.input}
        onChangeText={setModelo}
        value={modelo}
        />

      <Text style={styles.label}>Ano</Text>
      <TextInput style={styles.input}
        onChangeText={setAno}
        value={ano}
        />

      <View style={styles.button}>
        <Button
          onPress={onSalvarClicked}
          title="Salvar"
        />
      </View>
    </View>
  );
}

let styles = StyleSheet.create({
  container: {
    backgroundColor: "#DDDDDD",
    flex: 1
  },
  loading: {
    flex: 1
  },
  label: {
    fontSize: 18,
    marginHorizontal: 12,
    marginTop: 12,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    fontSize: 16,
    marginHorizontal: 12,
    padding: 6,
  },
  button: {
    margin: 12,
  }
});
