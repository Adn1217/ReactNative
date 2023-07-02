import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
    alignItems: "center",
    fontStyle: "italic",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  itemNameContainer: {
    maxWidth: "75%",
  },
  itemName: {
    marginRight: 10,
    minHeight: 30,
    width: 180,
    textAlign: "center",
    paddingVertical: 10,
    fontFamily: "poppins",
    borderRadius: 10,
  },
  itemContainer: {},
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    minWidth: "30%",
  },
  deleteButton: {},
  Pending: {
    backgroundColor: "orange",
  },
  InProgress: {
    backgroundColor: "lightgreen",
  },
  Completed: {
    backgroundColor: "green",
  },
});
