import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerPortrait: {
    flex: 1,
    maxWidth: 350,
    maxHeight: "10%",
    minHeight: 75,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    margin: 10,
  },
  containerLandscape: {
    flex: 1,
    maxWidth: 350,
    maxHeight: "25%",
    minHeight: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    // margin: 10,
  },
  button: {
    maxWidth: 200,
    marginVertical: 5,
  },
});
