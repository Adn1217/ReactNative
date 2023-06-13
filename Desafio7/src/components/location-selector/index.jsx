import { useState } from "react";
import { View, Button, Text, Alert } from "react-native";

import { styles } from "./styles";
import colors from "../../components";

const LocationSelector = ({ onLocation }) => {
  const [location, setLocation] = useState();

  async function selectLocation() {}
  return (
    <View style={styles.container}>
      {!location ? (
        <Text>No hay ubicación seleccionada</Text>
      ) : (
        <Text>{`Latitud: ${location.lat}, Longitud: ${location.lon}`}</Text>
      )}
      <Button title="Seleccionar ubicación" onPress={selectLocation} color={colors.primary} />
    </View>
  );
};

export default LocationSelector;
