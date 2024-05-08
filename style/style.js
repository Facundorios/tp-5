import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: "skyblue",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    fontFamily: "Roboto",
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    padding: 10,
    borderRadius: 5,
  },

  image: {
    backgroundColor: "aliceblue",
    width: 125,
    height: 125,
    borderRadius: 15,
    margin: 10,
  },

  imageCard: {
    flex: 3,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "steelblue",
    borderRadius: 15,
    width: 300,
    height: 150,
    margin: 10,

  },
  abilities: {
    flexDirection: "column",
  },

  card: {
    flex: 3,
    backgroundColor: "aliceblue",
    padding: 10,
    borderRadius: 15,
    margin: 20,
    
  },
  deleteButton: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
  }
});
