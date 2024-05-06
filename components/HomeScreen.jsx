import * as React from "react";
import { View, Text, Button} from "react-native";
import { styles } from "../style/style";


export function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style = {styles.text}>Bienvenido, esto es una app de pokemon.</Text>
      <Text style = {styles.text}>Esta aplicación te traerá un total de 1302 pokemones, con sus especificaciones, y tendrás la opción de eliminarlos si lo deseas.</Text>
      <Button
        title="Ir a la aplicación."
        onPress={() => navigation.navigate('Pokemones')}
      />
    </View>
  );
}