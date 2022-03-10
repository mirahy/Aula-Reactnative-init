import React from 'react';
import {Text, View, StyleSheet, ScrollView, SafeAreaView} from 'react-native';

import CarroItem from './components/CarroItem';
import carrosDb from './CarrosDb'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});

const App = () => {
  /* let carrosJsx = [
        <CarroItem titulo={carroDB[0].modelo + "/ " + carroDB[0].ano}     foto={carroDB[0].foto}/>,
  ] */

  let carrosJsx = []
  for (let key in carrosDb) {
    let carroDb = carrosDb[key]
    carrosJsx.push(<CarroItem titulo={carroDb.modelo + "/ " + carroDb.ano}     foto={carroDb.foto}/>)
  }
  
    return(
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {carrosJsx}
      </ScrollView>
    </SafeAreaView>
  )
};

export default App;
