import React from "react";
import { Text, Button, View } from "react-native";
import { styles } from "../style/style";

function Home({ navigation }) {
  return (
    <>
      <View style={styles.container}>
        <Button
          style={styles.button}
          title="Ver lista de pokemones"
          onPress={() => navigation.navigate("Pokemon-List")}
        />
      </View>
    </>
  );
}

export default Home;
