import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  screenContainerLandscape: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    padding: "5%",
  },
  titleLandscape: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: "1%",
  },
  calendarContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "96%",
    marginHorizontal: "2%",
  },
  calendarContainerLandscape: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: "95%",
  },
  datesContainer: {
    flex: 1,
    alignItems: "center",
  },
  datesContainerLandscape: {
    flex: 2,
    height: "40%",
    minHeight: 250,
    padding: 10,
    alignItems: "center",
  },
  scrollViewPortrait: {},
  scrollViewLandscape: {
    minHeight: "20%",
    flex: 1,
    marginTop: "2%",
  },
  calendar: {
    minWidth: "90%",
  },
  calendarLandscape: {
    minWidth: "90%",
  },
  inputComponent: {
    flex: 1,
    width: "90%",
    maxHeight: "45%",
  },
  inputComponentLandscape: {
    flex: 1,
    padding: 20,
    minWidth: "40%",
    marginHorizontal: "2%",
    backgroundColor: "white",
    marginVertical: "1%",
  },
  flatListPortrait: {
    flex: 1,
    justifyContent: "space-around",
    maxHeight: "40%",
  },
  flatListLandscape: {
    flex: 1,
    minWidth: "40%",
    maxWidth: "40%",
    minHeight: "80%",
    marginHorizontal: "2%",
    justifyContent: "space-evenly",
  },
});
