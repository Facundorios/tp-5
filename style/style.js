import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      textAlign: "center",
      fontFamily: "Roboto",
      padding: 10,
    },
    pokemonList: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
    }
  })