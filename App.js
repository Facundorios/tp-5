// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PokemonListScreen from './screens/PokemonListScreen';
import PokemonCardScreen from './screens/PokemonCardScreen';

import Home from './screens/Home';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PokemonList">
        <Stack.Screen name="Inicio" component={Home} />
        <Stack.Screen name="Pokemon-List" component={PokemonListScreen} />
        <Stack.Screen name="Pokemon-Card" component={PokemonCardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
