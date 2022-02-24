import React from 'react';
import {Text, View, Image, StyleSheet, ScrollView} from 'react-native';

const App = () => {
  return (
    <View>
      <Text> Mirahy Fonseca</Text>
      <Text>IFMS</Text>

      <Image 
      style={styles.imagem}
      source={require('./assets/img.jpg')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imagem: {
    width: 360,
    height: 200,
  }
})

export default App;
