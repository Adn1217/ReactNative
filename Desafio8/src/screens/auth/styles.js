import { StyleSheet } from "react-native";

import { theme } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.primary,
  },
  content: {
    width: "80%",
    maxWidth: 400,
    padding: 15,
    margin: 15,
    backgroundColor: "white",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: theme.colors.secondary,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  title: {
    fontFamily: "poppinsBold",
    fontSize: 16,
    textAlign: "center",
  },
  label: {
    fontSize: 14,
    fontFamily: "poppins",
    paddingVertical: 8,
  },
  input: {
    height: 45,
    borderBottomColor: theme.colors.primary,
    borderBottomWidth: 1,
    // width: "90%",
    fontFamily: "poppins",
    marginBottom: 5,
  },
  link: {
    paddingVertical: 5,
    // borderBottomColor: "#013fd0",
    // borderBottomWidth: 1,
    // width: "90%",
  },
  linkText: {
    fontFamily: "poppinsBold",
    color: "#013fd0",
    fontSize: 13,
    borderBottomColor: theme.colors.primary,
    // borderWidth: 1,
    textAlign: "center",
  },
  submitContainer: {
    paddingVertical: 5,
    // width: "90%",
  },
});
