import { StyleSheet } from "react-native";

import { theme } from "../../constants";

export const styles = StyleSheet.create({
  containerPortrait: {
    flex: 1,
    maxWidth: "90%",
    height: "40%",
    maxHeight: 350,
    // minHeight: 30,
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
    // maxWidth: 350,
    minWidth: "30%",
    // maxHeight: "25%",
    minHeight: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderColor: theme.colors.secondary,
    borderWidth: 2,
    borderStyle: "solid",
    margin: 10,
  },
  buttons: {
    flex: 1,
    flexDirection: "row",
    maxWidth: "80%",
    maxHeight: "20%",
    // maxWidth: 200,
    marginVertical: 0,
    alignItems: "center",
    gap: 5,
  },
  buttonsLandscape: {
    flex: 1,
    flexDirection: "row",
    maxHeight: "18%",
    // maxWidth: 200,
    // marginVertical: 5,
    alignItems: "center",
    gap: 5,
  },

  preview: {},
});
