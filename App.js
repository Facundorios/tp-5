// In App.js in a new project
import { useState, useEffect } from "react";
import { FlatList, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

function showPokemon({ item, index }) {
  return (
    <View>
      <Text>{item.name}</Text>
    </View>
  );
}

function App() {
  const [list, setList] = useState([]);

  const apiFetch = async () => {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon");
      const data = await response.json();

      const allPokemon = [...data.results];
      console.log(allPokemon);

      const pokemons = allPokemon.map(async (pokemon) => {
        const pokeFetch = await fetch(pokemon.url);
        const pokeData = await pokeFetch.json();
        
        return pokeData;
      });

      setList(pokemons);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    apiFetch();
  }, []);

  return (
    <View>
      <FlatList
        data={list}
        renderItem={showPokemon}
        keyExtractor={(item) => item.name}
      />
      <StatusBar style="auto" />
    </View>
  );
}

export default App;
