// screens/PokemonDetailScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, Image } from 'react-native';
import axios from 'axios';

const PokemonDetailScreen = ({ route }) => {
  const [pokemonData, setPokemonData] = useState(null);
  const { name } = route.params;

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(response => {
        setPokemonData(response.data);
      })
      .catch(error => {
        console.error('Error fetching Pokemon details:', error);
      });
  }, [name]);

  if (!pokemonData) {
    return (
      <View>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View>
      <Text>Name: {pokemonData.name}</Text>
      <Text>Height: {pokemonData.height}</Text>
      <Text>Weight: {pokemonData.weight}</Text>
      <Text>Abilities:</Text>
      {pokemonData.abilities.map((ability, index) => (
        <Text key={index}>{ability.ability.name}</Text>
      ))}
      <Image source={pokemonData.sprites.front_default} style={styles.image} />
    </View>
  );
};


const styles = {
    image: {
        width: 100,
        height: 100,
    },
}



export default PokemonDetailScreen;
