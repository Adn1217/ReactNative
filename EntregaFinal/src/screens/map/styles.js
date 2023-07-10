import { StyleSheet } from "react-native";

import { theme } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  info: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    gap: 10,
  },
  title: {},
  coordName: {
    fontWeight: "bold",
  },
  mapContainer: {
    flex: 1,
    borderColor: theme.colors.secondary,
    borderWidth: 2,
    borderStyle: "solid",
    // ...StyleSheet.absoluteFillObject,
    maxWidth: "99%",
    minHeight: "96%",
    justifyContent: "space-around",
    marginHorizontal: "1%",
    marginVertical: "1%",
  },
  map: {
    flex: 1,
  },
  errorDisplay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
