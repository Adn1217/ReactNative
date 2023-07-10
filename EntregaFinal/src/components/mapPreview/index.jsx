import { View, Image } from "react-native";

import { styles } from "./styles";
import { mapUrl } from "../../utils/maps";

const MapPreview = ({ children, location = {}, style }) => {
  const { latitude, longitude } = location;
  const MapPreviewUrl = location ? mapUrl(latitude, longitude) : "";
  return (
    <View style={{ ...styles.container, ...style }}>
      {latitude && longitude ? (
        <Image style={styles.mapImage} source={{ uri: MapPreviewUrl }} />
      ) : (
        children
      )}
    </View>
  );
};

export default MapPreview;
