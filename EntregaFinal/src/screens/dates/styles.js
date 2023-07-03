import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    padding: "5%",
  },
  titleLandscape: {
    fontSize: 20,
    fontWeight: "bold",
    padding: "2%",
  },
  screenContainer: {
    // paddingTop: '10%',
    alignItems: "center",
    justifyContent: "center",
  },
  screenContainerLandscape: {
    // paddingTop: '1%',
    alignItems: "center",
    justifyContent: "center",
  },
  calendarContainer: {
    flexDirection: "column",
    justifyContent: "space-around",
    // backgroundColor: 'orange',
    padding: 5,
  },
  calendarContainerLandscape: {
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor: 'orange',
    height: "70%",
  },
  datesContainer: {
    // backgroundColor: 'blue',
    height: "50%",
    minHeight: 380,
    width: 350,
    // alignContent: 'center'
    alignItems: "center",
  },
  datesContainerLandscape: {
    flex: 2,
    // backgroundColor: 'blue',
    // borderWidth: 5,
    padding: 10,
    alignItems: "center",
  },
  scrollViewLandscape: {},
  calendar: {
    minWidth: "90%",
  },
  calendarLandscape: {
    minWidth: "90%",
  },
  inputComponent: {
    padding: 5,
    // backgroundColor: 'yellow'
    backgroundColor: "white",
  },
  inputComponentLandscape: {
    flex: 1,
    padding: 20,
    minWidth: 150,
    marginHorizontal: 10,
    backgroundColor: "white",
    // backgroundColor: 'yellow'
  },
  flatListPortrait: {
    flex: 1,
    justifyContent: "space-around",
    maxHeight: "40%",
    // alignItems: 'center',
  },
  flatListContainer: {
    flex: 2,
    minWidth: 74,
    maxWidth: "40%",
    justifyContent: "space-evenly",
    // alignItems: 'center',
  },
});
