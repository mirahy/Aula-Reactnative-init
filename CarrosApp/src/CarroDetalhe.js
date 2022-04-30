import React, {useEffect} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {pegarCarro} from './services/CarrosServices';

import CarroTexto from './CarroTexto';
import CarroFoto from './CarroFoto';

const Tab = createBottomTabNavigator();

export default props => {
  const id = props.route.params.id;
  const carro = pegarCarro(id);

  useEffect(() => {
    props.navigation.setOptions({title: carro.modelo});
  });

  // screenOptions={{ headerShown: false}}
  return (
    <Tab.Navigator
    
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ color, size }) => {
        let iconName ;

        if (route.name === 'Texto') {
          iconName = 'text'
        } else if (route.name === 'Foto') {
          iconName = 'car'
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}
    >
      <Tab.Screen name="Texto" component={CarroTexto} initialParams={{carro}} />
      <Tab.Screen name="Foto" component={CarroFoto} initialParams={{carro}} />
    </Tab.Navigator>
  );
};
