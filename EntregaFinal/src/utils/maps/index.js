import { REACT_APP_GOOGLE_MAPS_API } from "@env";

export const mapUrl = (lat, long, zoom = 14, type = "roadmap", color = "red", label = "C") => {
  const mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${long}&zoom=${zoom}
&size=300x300&maptype=${type}&markers=color:${color}%7Clabel:C%7C${lat},${long}
&key=${REACT_APP_GOOGLE_MAPS_API}`;
  return mapUrl;
};
