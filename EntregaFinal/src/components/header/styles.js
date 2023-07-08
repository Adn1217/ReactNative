import { StyleSheet } from "react-native";

import { theme } from "../../constants";

export const styles = StyleSheet.create({
  header: {
    // flex: 1,
    minheight: "10%",
    backgroundColor: theme.colors.primary,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 25,
    color: "white",
  },
  options: {
    // flex: 1,
    width: "100%",
    flexDirection: "row",
    // justifyContent: 'space-around',
    textAlign: "center",
  },
  option: {
    justifyContent: "center",
  },
  item: {
    color: "white",
    minWidth: "25%",
    // paddingVertical: '2%',
    paddingVertical: 5,
    textAlign: "center",
    fontFamily: "poppins",
  },
  itemSelected: {
    textDecorationLine: "underline",
    fontFamily: "poppinsBold",
  },
});
