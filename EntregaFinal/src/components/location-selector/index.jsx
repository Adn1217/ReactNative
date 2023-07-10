import { useNavigation, useRoute } from "@react-navigation/native";
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
import { getAddress } from "../../utils/maps";
import MapPreview from "../mapPreview";

const LocationSelector = ({ onLocation }) => {
  const route = useRoute();
  const [pickedLocation, setPickedLocation] = useState(route.params?.pickedLocation);
  const orientation = useOrientation();
  const navigation = useNavigation();
  // Keyboard.dismiss();

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

    let latitude = "";
    let longitude = "";
    let address = "";

    if (!pickedLocation || !fromMap) {
      const location = await getCurrentPositionAsync({ timeout: 5000 });
      latitude = location.coords.latitude;
      longitude = location.coords.longitude;
      address = await getAddress({ latitude, longitude });
    } else {
      latitude = pickedLocation.latitude;
      longitude = pickedLocation.longitude;
      address = pickedLocation.address;
    }
    if (fromMap) {
      Keyboard.dismiss();
      navigation.navigate("Map", { redirigido: "Ok", latitude, longitude, address });
    } else {
      setPickedLocation({ latitude, longitude, address });
      onLocation({ latitude, longitude, address });
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
