import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  ActivityIndicator,
  FlatList,
  Text,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import CarroItem from './CarroItem';
import { pegarCarros } from './services/CarrosServices';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DDDDDD',
    padding: 5,
    
  },
  TextInput:
  {
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    color: 'black'
  }
});

const App = props => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [q, setQ] = useState('');

  useEffect(() => {
    setTimeout(carregarDados, 2000);
  });

  const carregarDados = () => {
    setData(pegarCarros());
    setLoading(false);
  };

  const abrirDetalhe = id => {
    //alert(id)
    props.navigation.navigate('CarroDetalhe', {id});
  };

  const jsxCarros = () => (
    <View>
      <TextInput value={q} onChangeText={setQ} placeholder="Pesquise" style={styles.TextInput} />
      {/* <ScrollView style={styles.container}>{jsxLista()}</ScrollView> */}
      <FlatList data={dataFiltrado} renderItem={Item} />
    </View>
  );

  const Item = props => {
    console.log(props)
    return (
      <CarroItem
        id={props.index}
        foto={props.item.foto}
        titulo={props.item.modelo + '/' + props.item.ano}
        onPress={abrirDetalhe}
      />
    );
  };

  const jsxLoading = () => (
    <View>
      <ActivityIndicator size="large" />
    </View>
  );

  let dataFiltrado;
  if (q == '') {
    dataFiltrado = data;
  } else {
    dataFiltrado = [];
    let q2 = q.toUpperCase();
    for (let key in data) {
      let texto = `${data[key].modelo} ${data[key].ano}`;
      if (texto.toUpperCase().indexOf(q2) >= 0) {
        dataFiltrado.push(data[key]);
      }
    }
  }

  /* const jsxLista = () => {

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
  } */

  return loading ? jsxLoading() : jsxCarros();
};

export default App;
