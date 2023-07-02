import { useFonts } from "expo-font";
import React from "react";
import { ActivityIndicator, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { theme } from "./constants/theme.js";
import { init, init2, reInit, reInit2 } from "./db/sqlite";
import AppNavigator from "./navigation";
import { styles } from "../assets/styles/styles.js";

// reInit()
//   .then(() => {
//     console.log("Base de datos Dates reiniciada");
//   })
//   .catch((err) => {
//     console.log("Se ha presentado error al reiniciar base de datos Dates");
//     console.log(err);
//   });

// reInit2()
//   .then(() => {
//     console.log("Base de datos Works reiniciada");
//   })
//   .catch((err) => {
//     console.log("Se ha presentado error al reiniciar base de datos Works");
//     console.log(err);
//   });

init()
  .then(() => {
    console.log("Base de datos Dates inicializada");
  })
  .catch((err) => {
    console.log("Se ha presentado error al inicializar base de datos Dates");
    console.log(err);
  });

init2()
  .then(() => {
    console.log("Base de datos Works inicializada");
  })
  .catch((err) => {
    console.log("Se ha presentado error al inicializar base de datos Works");
    console.log(err);
  });

export default function App() {
  const [loadedFonts] = useFonts({
    poppinsBlack: require("../assets/fonts/Poppins/Poppins-Black.ttf"),
    poppinsBlackItalic: require("../assets/fonts/Poppins/Poppins-BlackItalic.ttf"),
    poppinsBold: require("../assets/fonts/Poppins/Poppins-Bold.ttf"),
    poppinsBoldItalic: require("../assets/fonts/Poppins/Poppins-BoldItalic.ttf"),
    poppinsItalic: require("../assets/fonts/Poppins/Poppins-Italic.ttf"),
    poppins: require("../assets/fonts/Poppins/Poppins-Regular.ttf"),
  });

  if (!loadedFonts) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <AppNavigator />
    </SafeAreaView>
  );
}
