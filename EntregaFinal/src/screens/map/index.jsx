import React, { useState } from "react";
import { Text, TextInput, Button, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

import { styles } from "./styles.js";

const Map = ({ navigation, route }) => {
  const [selectedLocation, setSelectedLocation] = useState({
    lat: route.params?.latitude,
    long: route.params?.longitude,
  });
  const params = route.params || {};
  const { redirigido = "Error", latitude = 0, longitude = 0 } = params;
  const initialRegion = { latitude, longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421 };
  const handlePickLocation = (event) => {
    const lat = event.nativeEvent.coordinate.latitude;
    const long = event.nativeEvent.coordinate.longitude;
    console.log(`Ubicación seleccionada: Lat ${lat} - Long: ${long}`);
    setSelectedLocation({
      lat,
      long,
    });
  };
  return (
    <View style={styles.container}>
      {latitude & longitude ? (
        <View>
          <View style={styles.info}>
            <Text style={styles.coordName}>Lat:</Text>
            <Text style={styles.coord}>{latitude}</Text>
            <Text style={styles.coordName}>Long:</Text>
            <Text style={styles.coord}>{longitude}</Text>
          </View>
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
                    latitude: selectedLocation?.lat,
                    longitude: selectedLocation?.long,
                  }}
                />
              ) : null}
            </MapView>
          </View>
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
