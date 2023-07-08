import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  listItem: {
    flex: 1,
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
    minWidth: "90%",
    elevation: 5,
  },
  itemNameContainer: {
    flex: 2,
    minWidth: "25%",
  },
  itemName: {
    marginRight: 10,
    minWidth: "40%",
    textAlign: "center",
    paddingVertical: 10,
    fontFamily: "poppins",
    borderRadius: 10,
  },
  itemContainer: {},
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    minWidth: "40%",
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
