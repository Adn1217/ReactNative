import { useNavigation } from "@react-navigation/native";
import {
  getCurrentPositionAsync,
  requestPermissionsAsync,
  requestForegroundPermissionsAsync,
  requestBackgroundPermissionsAsync,
} from "expo-location";
import { useState } from "react";
import { View, Button, Text, Alert, Keyboard } from "react-native";

import { styles } from "./styles";
import { theme, ORIENTATION } from "../../constants";
import useOrientation from "../../hooks/useOrientation.jsx";
import { geoUrl } from "../../utils/maps";
import MapPreview from "../mapPreview";

const LocationSelector = ({ onLocation }) => {
  const [pickedLocation, setPickedLocation] = useState();
  const orientation = useOrientation();
  const navigation = useNavigation();
  Keyboard.dismiss();
  const verifyPermissions = async () => {
    // const { status } = await requestPermissionsAsync();
    const { status } = await requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permisos insuficientes", "Necesitamos permisos para la ubicación", [
        { text: "Ok" },
      ]);
      return false;
    } else {
      await requestBackgroundPermissionsAsync();
      return true;
    }
  };

  async function selectLocation(fromMap = false) {
    const locationGranted = await verifyPermissions();

    if (!locationGranted) return;
    const location = await getCurrentPositionAsync({ timeout: 5000 });
    const { latitude, longitude } = location.coords;
    let address = "";
    if (fromMap) {
      Keyboard.dismiss();
      navigation.navigate("Map", { redirigido: "Ok", latitude, longitude });
    } else {
      try {
        const response = await fetch(geoUrl(latitude, longitude), {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        });
        const addressData = await response.json();
        if (addressData.status === "OK") {
          address = addressData.results[0].formatted_address;
          console.log("Dirección actual: ", JSON.stringify(address));
        } else if (addressData.status === "ZERO_RESULTS") {
          console.log("La consulta no arrojó resultados: ", addressData.estatus);
        } else {
          console.log(
            `Se ha presentado error ${addressData.estatus} al consultar la dirección: ${addressData.error_message}`
          );
        }
        setPickedLocation({ lat: latitude, lon: longitude });
        onLocation({ lat: latitude, lon: longitude, address });
      } catch (err) {
        console.log("Se ha presentado error al intentar traducir coordenadas: ", err);
      }
    }
  }

  return (
    <View
      style={
        orientation === ORIENTATION.PORTRAIT ? styles.containerPortrait : styles.containerLandscape
      }>
      <MapPreview location={pickedLocation} style={styles.preview}>
        <Text>No hay ubicación seleccionada</Text>
      </MapPreview>
      <View style={orientation === ORIENTATION.PORTRAIT ? styles.buttons : styles.buttonsLandscape}>
        <Button
          title="Seleccionar"
          onPress={() => {
            selectLocation(true);
          }}
          color={theme.colors.secondary}
        />
        <Button
          title="Ubicación actual"
          onPress={() => {
            selectLocation(false);
          }}
          color={theme.colors.primary}
        />
      </View>
    </View>
  );
};

export default LocationSelector;
