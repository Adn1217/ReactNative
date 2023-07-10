import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  screenContainer: {
    flex: 1,
    // height: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  listContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  listContainerLandscape: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    fontWeight: "bold",
    alignItems: "flex-start",
  },
  inputPortrait: {
    minWidth: "90%",
    flex: 1,
    minHeight: "30%",
    marginVertical: "5%",
    marginTop: "10%",
  },
  inputLandscape: {
    flex: 1,
    maxHeight: "100%",
    minWidth: "50%",
  },
  flatList: {
    flex: 1,
    marginTop: "5%",
    maxHeight: "78%",
  },
  flatListContainer: {
    flex: 1,
    minHeight: "50%",
    alignItems: "center",
    maxHeight: "95%",
  },
  flatListLandscape: {
    flex: 1,
    minWidth: "50%",
    alignItems: "center",
  },
});
