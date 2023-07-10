import React from "react";
import { Text, TextInput, Button, View } from "react-native";

import { styles } from "./styles.js";

const Map = ({ navigation, route }) => {
  const params = route.params || {};
  const { redirigido = "Error", latitude = 0, longitude = 0 } = params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Redirigido: {redirigido}</Text>
      {latitude & longitude ? (
        <View>
          <Text style={styles.title}>Latitud: {latitude}</Text>
          <Text style={styles.title}>Redirigido: {longitude}</Text>
        </View>
      ) : (
        <Text style={styles.title}>No se ha obtenido ubicación</Text>
      )}
      <View style={styles.map} />
    </View>
  );
};

export default Map;
