import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  title: {
    fontSize: 25,
  },
  description: {
    marginTop: 10,
  },
  inputs: {
    flex: 1,
    // minHeight: 200,
    // maxHeight: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    borderWidth: 1,
    width: 200,
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 5,
    textAlign: "center",
    backgroundColor: "white",
  },
  button: {
    paddingVertical: 5,
  },
  buttons: {
    paddingVertical: 5,
    justifyContent: "space-between",
  },
});
