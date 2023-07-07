import { View, Image } from "react-native";

import { styles } from "./styles";
import { mapUrl } from "../../utils/maps";

const MapPreview = ({ children, location = {}, style }) => {
  const { lat, lon } = location;
  const MapPreviewUrl = location ? mapUrl(lat, lon) : "";
  return (
    <View style={{ ...styles.container, ...style }}>
      {lat && lon ? <Image style={styles.mapImage} source={{ uri: MapPreviewUrl }} /> : children}
    </View>
  );
};

export default MapPreview;
