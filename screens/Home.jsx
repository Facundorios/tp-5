import React from "react";
import { Text, Button } from "react-native";

function Home({ navigation }) {
  return (
    <>
      <Text>OÑAAAA</Text>
      <Button title="Andate de acá" onPress={() => navigation.navigate("PokemonList")}/>
    </>
  );
}

export default Home;
