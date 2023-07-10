import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState, useLayoutEffect } from "react";
import { Text, Button, View, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";

import { styles } from "./styles.js";
import { theme } from "../../constants/theme.js";
import { getAddress } from "../../utils/maps/index.js";

const Map = ({ navigation, route }) => {
  const [selectedLocation, setSelectedLocation] = useState({
    latitude: route.params?.latitude || "-",
    longitude: route.params?.longitude || "-",
    address: route.params?.address || "-",
  });
  const params = route.params || {};
  const { redirigido = "Error" } = params;
  const initialRegion = {
    latitude: selectedLocation.latitude,
    longitude: selectedLocation.longitude,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  const handlePickLocation = async (event) => {
    const latitude = event.nativeEvent.coordinate.latitude;
    const longitude = event.nativeEvent.coordinate.longitude;
    console.log(`Ubicación seleccionada: Lat ${latitude} - Long: ${longitude}`);
    const address = await getAddress({ latitude, longitude });
    setSelectedLocation({ latitude, longitude, address });
  };

  const saveLocation = () => {
    if (selectedLocation) {
      navigation.navigate("Dates", {
        pickedLocation: { ...selectedLocation },
        locationVisible: true,
      });
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity disabled={!selectedLocation} onPress={() => saveLocation()}>
          <Ionicons
            name="add-circle-outline"
            size={styles.saveIcon.fontSize}
            color={!selectedLocation ? theme.colors.cancel : theme.colors.text}
          />
        </TouchableOpacity>
      ),
    });
  }, [selectedLocation]);

  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <View style={styles.coords}>
          <Text style={styles.coordName}>Lat:</Text>
          <Text style={styles.coord}>{selectedLocation.latitude}</Text>
          <Text style={styles.coordName}>Long:</Text>
          <Text style={styles.coord}>{selectedLocation.longitude}</Text>
        </View>
        <Text style={styles.coordName}>Address:</Text>
        <Text style={styles.coord}>{selectedLocation.address}</Text>
      </View>
      {selectedLocation.latitude & selectedLocation.longitude ? (
        <View style={styles.mapContainer}>
          <MapView
            initialRegion={initialRegion}
            style={styles.map}
            onPress={(event) => handlePickLocation(event)}
            minZoomLevel={14}>
            {selectedLocation ? (
              <Marker
                title="Ubicación seleccionada"
                coordinate={{
                  latitude: selectedLocation?.latitude,
                  longitude: selectedLocation?.longitude,
                }}
              />
            ) : null}
          </MapView>
        </View>
      ) : (
        <View style={styles.errorDisplay}>
          <Text style={styles.title}>Redirigido: {redirigido}</Text>
          <Text style={styles.title}>No se ha obtenido ubicación</Text>
        </View>
      )}
    </View>
  );
};

export default Map;
