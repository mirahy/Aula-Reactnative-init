import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';

import CarroItem from './CarroItem';
import CarrosDb from './CarrosDb';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DDDDDD',
    padding: 5,
  },
});

const App = props => {
  const abrirDetalhe = id => {
    //alert(id)
    props.navigation.navigate('CarroDetalhe', {id});
  };

  let carrosJsx = [];
  for (let key in CarrosDb) {
    let carroDb = CarrosDb[key];
    carrosJsx.push(
      <CarroItem
        foto={carroDb.foto}
        titulo={carroDb.modelo + '/' + carroDb.ano}
        onPress={abrirDetalhe}
        key={key}
      />,
    );
  }

  return <ScrollView style={styles.container}>{carrosJsx}</ScrollView>;
};

export default App;
