import {
  View,
  Button,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { styles } from "../style/style";
import { useState } from "react";

function PokemonListScreen({ navigation }) {
  const [pokemonList, setPokemonList] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?offset=0&limit=350"
      );
      const data = await response.json();
      const allPokemon = [...data.results];

      const detailsPromises = allPokemon.map(async (pokemon) => {
        const pokemonResponse = await fetch(pokemon.url);
        const pokemonData = await pokemonResponse.json();

        return pokemonData;
      });
      const pokemonWithDetails = await Promise.all(detailsPromises);
      setPokemonList(pokemonWithDetails);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const deletePokemon = (id) => {
    const newList = pokemonList.filter((pokemon) => pokemon.id !== id);
    setPokemonList(newList);
  };

  const deleteButton = (id) => {
    return (
      <Button
        title="Eliminar"
        onPress={() => deletePokemon(id)}
        style={styles.deleteButton}
      />
    );
  };


  return (
    <View style={styles.container}>
      <Text>Lista de pokemones</Text>
      <Button
        title="Cargar pokemones"
        onPress={fetchData}
        style={styles.button}
      />

      <FlatList
        data={pokemonList}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate("Pokemon-Card", { item })}
              style={styles.imageCard}
            >
              <Image src={item.sprites.front_default} style={styles.image} />
              <Button title="Eliminar" style={styles.deleteButton} onPress={() => deletePokemon(item.id)} />
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

export default PokemonListScreen;
