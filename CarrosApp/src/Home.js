import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  TextInput,
  View,
  ActivityIndicator,
} from 'react-native';

import CarroItem from './CarroItem';
import CarrosDb from './CarrosDb';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DDDDDD',
    padding: 5,
  },
});

const App = props => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [q, setQ] = useState('');

  useEffect(() => {
    setTimeout(carregarDados, 2000);
  });

  const carregarDados = () => {
    console.log('Iniciando');

    setData(CarrosDb);
    setLoading(false);
  };

  const abrirDetalhe = id => {
    //alert(id)
    props.navigation.navigate('CarroDetalhe', {id});
  };

  const jsxCarros = () => (
    <View>
      <TextInput value={q} onChangeText={setQ} />
      <ScrollView style={styles.container}>{jsxLista()}</ScrollView>
    </View>
  );

  const jsxLoading = () => (
    <View>
      <ActivityIndicator size="large" />
    </View>
  );

  let dataFiltrado;
  if(q == ""){
    dataFiltrado = data
  }else{
    dataFiltrado = []
    let q2 = q.toUpperCase()
    for (let key in data){
      let texto = `${data[key].modelo} ${data[key].ano}`
      if(texto.toUpperCase().indexOf(q2) >= 0){
        dataFiltrado.push(data[key])
      }
    }
  } 

  //

  const jsxLista = () => {

    let tmp = [];
    for (let key in dataFiltrado) {
      let carroDb = dataFiltrado[key];
      tmp.push(
        <CarroItem
          foto={carroDb.foto}
          titulo={carroDb.modelo + '/' + carroDb.ano}
          onPress={abrirDetalhe}
          key={key}
        />)
    }
    return tmp;
  }

  return loading ? jsxLoading() : jsxCarros();
};

export default App;
