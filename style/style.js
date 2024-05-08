import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    fontFamily: "Roboto",
    padding: 10,
  },
  button: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
  },
  gallery: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  image: {
    width: 25,
    height: 25,
  },
  imageCard: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    borderRadius: 15,
    width: 300,
    height: 300,
  },
  abilities: {
    flexDirection: "column",
  },
  card: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 15,
    margin: 10,
  },
});
