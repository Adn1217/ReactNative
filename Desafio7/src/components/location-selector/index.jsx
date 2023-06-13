import { getCurrentPositionAsync, requestPermissionsAsync } from "expo-location";
import { useState } from "react";
import { View, Button, Text, Alert } from "react-native";

import { styles } from "./styles";
import { theme, ORIENTATION } from "../../constants";
import useOrientation from "../../hooks/useOrientation.jsx";

const LocationSelector = ({ onLocation }) => {
  const [pickedLocation, setPickedLocation] = useState();
  const orientation = useOrientation();
  const verifyPermissions = async () => {
    const { status } = await requestPermissionsAsync();

    if (status !== "granted") {
      Alert.alert("Permisos insuficientes", "Necesitamos permisos para la ubicación", [
        { text: "Ok" },
      ]);
      return false;
    }
    return true;
  };

  async function selectLocation() {
    const locationGranted = await verifyPermissions();

    if (!locationGranted) return;
    const location = await getCurrentPositionAsync({ timeout: 5000 });

    const { latitude, longitude } = location.coords;

    setPickedLocation({ lat: latitude, lon: longitude });
    onLocation({ lat: latitude, lon: longitude });
  }

  return (
    <View
      style={
        orientation === ORIENTATION.PORTRAIT ? styles.containerPortrait : styles.containerLandscape
      }>
      <View>
        {!pickedLocation ? (
          <Text>No hay ubicación seleccionada</Text>
        ) : (
          <Text>{`Latitud: ${pickedLocation.lat}, Longitud: ${pickedLocation.lon}`}</Text>
        )}
      </View>
      <View style={styles.button}>
        <Button title="Ubicación actual" onPress={selectLocation} color={theme.colors.primary} />
      </View>
    </View>
  );
};

export default LocationSelector;
