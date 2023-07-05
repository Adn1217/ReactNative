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
    paddingBottom: "1%",
    // padding: "2%",
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
    height: "95%",
  },
  datesContainer: {
    // backgroundColor: 'blue',
    width: 350,
    // alignContent: 'center'
    alignItems: "center",
  },
  datesContainerLandscape: {
    flex: 2,
    height: "40%",
    minHeight: 250,
    // backgroundColor: 'blue',
    // borderWidth: 5,
    padding: 10,
    alignItems: "center",
  },
  scrollViewLandscape: {
    minHeight: "90%",
    flex: 1,
    marginTop: "2%",
  },
  calendar: {
    minWidth: "90%",
    // height: "100%",
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
    // marginVertical: "2%",
    minWidth: "20%",
    maxWidth: "40%",
    // maxHeight: 220,
    marginHorizontal: "2%",
    backgroundColor: "white",
    marginVertical: "1%",
    // backgroundColor: 'yellow'
  },
  flatListPortrait: {
    flex: 1,
    justifyContent: "space-around",
    maxHeight: "40%",
    // alignItems: 'center',
  },
  flatListContainer: {
    flex: 1,
    minWidth: "40%",
    maxWidth: "40%",
    minHeight: "80%",
    marginHorizontal: "2%",
    justifyContent: "space-evenly",
    // alignItems: 'center',
  },
});
