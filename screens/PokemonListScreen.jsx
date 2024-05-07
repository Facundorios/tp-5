import { View, Button, Text, FlatList } from "react-native";
import { styles } from "../style/style";
import { useState } from "react";

function PokemonListScreen({ navigation }) {
  const [pokemonList, setPokemonList] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?offset=0&limit=1302"
      );
      const data = await response.json();
      const allPokemon = [...data.results];

      const detailsPromises = allPokemon.map(async (pokemon) => {

        const detailsResponse = await fetch(pokemon.url);
        const detailsData = await detailsResponse.json();
        
        return {
          name: pokemon.name,
          details: detailsData,
        };
      });
      const pokemonWithDetails = await Promise.all(detailsPromises);
      setPokemonList(pokemonWithDetails);
      console.log(detailsData)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };



  return (
    <View style={styles.container}>
      <Text>Lista de pokemones</Text>
      <Button title="Cargar pokemon" onPress={fetchData} />
      <FlatList data={pokemonList} renderItem={({ item }) => <Text>{item.name}</Text>} />
    </View>

  );
}

export default PokemonListScreen;
