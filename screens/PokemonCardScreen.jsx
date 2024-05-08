import React from "react";
import { View, Text, Button, FlatList, Image } from "react-native";
import { styles } from "../style/style";

function PokemonCardScreen({ route, navigation }) {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Text>
        Pokemon: "{item.name.charAt(0).toUpperCase() + item.name.slice(1)}"
      </Text>
      <Image src={item.sprites.front_default} style={styles.imageCard} />

      <View style={styles.card}>
        <Text style={styles.text}>
          Detalles de: {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
        </Text>
        <Text>Identificador: {item.id} </Text>
        <Text>Altura: {item.height / 10} Mts. </Text>
        <Text>Peso: {item.weight / 10} Kgs. </Text>
        <Text>Exp: {item.base_experience}</Text>

        <Text>Habilidades:</Text>
        <FlatList
          data={item.abilities}
          renderItem={({ item }) => <Text>-"{item.ability.name.charAt(0).toUpperCase() + item.ability.name.slice(1)}"</Text>}
          style={styles.abilities}
        />
      </View>
    </View>
  );
}

export default PokemonCardScreen;
