import React, { useState, useEffect } from 'react';
import {StyleSheet, FlatList,
  View, TextInput, ActivityIndicator} from 'react-native';

import CarroItem from './CarroItem';
import { getCarros } from './service/CarroService';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DDDDDD',
    padding: 5
  }
})

const App = props => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [q, setQ] = useState('')
  
  useEffect(() => {
    // setTimeout(carregarDados, 2000)
    carregarDados()
  }, [])

  const carregarDados = () => {
    console.log('carregarDados')

    getCarros()
    .then(carros => {
      setData(carros)
      setLoading(false)
    })
  }

  const editarCarro = (id) => {
    //alert(id)
    props.navigation.navigate('CarroEditar', {id})
  }

  const jsxCarros = () => (
    <View flex={1}>
      <TextInput
        value={q}
        onChangeText={setQ}
        placeholder="Pesquisar"
      />
      <FlatList style={styles.container}
        data={dataFiltrado}
        renderItem={Item}
      />
    </View>
  )

  const Item = propsItem => {
    // console.log(propsItem)
    
    return (
      <CarroItem
        id={propsItem.item.id}
        foto={propsItem.item.figura}
        titulo={propsItem.item.modelo + "/" + propsItem.item.ano}
        onPress={editarCarro} />
    )
  }

  const jsxLoading = () => (
    <View>
      <ActivityIndicator size="large" />
    </View>
  )

  let dataFiltrado;
  if (q == '') {
    dataFiltrado = data
  } else {
    dataFiltrado = []
    let q2 = q.toUpperCase()
    for (let key in data) {
      let texto = `${data[key].modelo} ${data[key].ano}`
      if (texto.toUpperCase().indexOf(q2) >= 0) {
        dataFiltrado.push(data[key])
      }
    }
  }

  if (loading) {
    return jsxLoading()
  } else {
    return jsxCarros()
  }
}

export default App;