import { StyleSheet } from "react-native";

import { theme } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    maxHeight: "30%",
  },
  inputContainer: {
    flexDirection: "row",
  },
  input: {
    // height: 45,
    borderBottomColor: theme.colors.primary,
    borderBottomWidth: 1,
    width: "85%",
    fontFamily: "poppins",
    marginBottom: 0,
  },
  eyeIcon: {
    paddingLeft: "3%",
    minWidth: "15%",
    fontSize: 25,
  },
  errorContainer: {
    flex: 1,
    marginTop: 20,
    paddingVertical: 0,
  },
  errorMessage: {
    fontSize: 12,
    fontFamily: "poppins",
    paddingVertical: 10,
    color: theme.colors.warning,
  },
});
