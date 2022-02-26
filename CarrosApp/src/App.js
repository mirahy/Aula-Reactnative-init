import React from 'react';
import {Text, View, StyleSheet, ScrollView, SafeAreaView} from 'react-native';

import CarroItem from './components/CarroItem';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});

const App = () => (
  <SafeAreaView style={styles.container}>
    <ScrollView>
      <CarroItem />
      <CarroItem />
      <CarroItem />
      <CarroItem />
      <CarroItem />
      <CarroItem />
      <CarroItem />
      <CarroItem />
      <CarroItem />
      <CarroItem />
      <CarroItem />
      <CarroItem />
      <CarroItem />
      <CarroItem />
      <CarroItem />
      <CarroItem />
      <CarroItem />
    </ScrollView>
  </SafeAreaView>
);

export default App;
