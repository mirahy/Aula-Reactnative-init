import React, {useEffect, useState} from 'react';
import { View, ActivityIndicator } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { pegarCarro } from './service/CarroService'

import CarroTexto from './CarroTexto'
import CarroFoto from './CarroFoto'

const Tab = createBottomTabNavigator();

export default props => {
  let id = props.route.params.id

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState()

  useEffect(() => {
    console.log('carregarDados', id)
    carregarDados()

    // props.navigation.setOptions({ title: carro.modelo })

  }, [])

  const carregarDados = () => {
    pegarCarro(id)
    .then(carro => {
      setData(carro)
      setLoading(false)
    })
  }

  const jsxLoading = () => (
    <View>
      <ActivityIndicator size="large" />
    </View>
  )
  
  const jsxTela = () => (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Texto" component={CarroTexto}
        initialParams={{carro:data}}
      />
      <Tab.Screen name="Foto" component={CarroFoto}
        initialParams={{carro:data}}
      />
    </Tab.Navigator>
  )

  return loading ? jsxLoading() : jsxTela();
}
