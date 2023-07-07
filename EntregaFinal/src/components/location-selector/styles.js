import { StyleSheet } from "react-native";

import { theme } from "../../constants";

export const styles = StyleSheet.create({
  containerPortrait: {
    flex: 1,
    maxWidth: 350,
    height: "50%",
    maxHeight: 350,
    minHeight: 75,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderColor: theme.colors.secondary,
    borderWidth: 2,
    borderStyle: "solid",
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
    marginVertical: 0,
  },
  preview: {
    // textAlign: "center",
    // maxHeight: "90%",
  },
});
