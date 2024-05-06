import {
  View,
  Text,
  Button,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { styles } from "../style/style";

function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);

  const pokeFetch = async () => {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?offset=0&limit=1302"
      );
      const data = await response.json();

      const pokeList = [data.results];

      const pokeDetails = pokeList.map(async (pokemon) => {
        const detailsReponse = await fetch(pokemon.url);
        const pokeData = await detailsReponse.json();
        return {
          name: pokeData.name,
          detailes: pokeData,
        };
    });
    const pokemonWithPokeDetails = await Promise.all(pokeDetails);
    setPokemonList(pokemonWithPokeDetails);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = (index) => {
    const newList = [...pokemonList];
    newList.splice(index, 1);
    setPokemonList(newList);
  };
  return (
    <>
      <View style={styles.container}>
        <Button title="Cargar Pokemones" onPress={pokeFetch} />
        {PokemonList.map((pokemon, index) => (
            <TouchableOpacity
                key={index}
                onPress={() => handleDelete(index)}
                style={styles.pokemonList}
            >
                <Image
                style={{ width: 50, height: 50 }}
                source={{
                    url: pokemon.details.sprites.front_default,
                }}
                />
                <Text>{pokemon.name}</Text>
            </TouchableOpacity>
        ))}
      </View>
    </>
  );
}

export default PokemonList;
