import { REACT_APP_GOOGLE_MAPS_API } from "@env";

export const mapUrl = (lat, long, zoom = 14, type = "roadmap", color = "red", label = "C") => {
  const mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${long}&zoom=${zoom}
&size=300x300&maptype=${type}&markers=color:${color}%7Clabel:C%7C${lat},${long}
&key=${REACT_APP_GOOGLE_MAPS_API}`;
  return mapUrl;
};

export const geoUrl = (lat, long, locType = "ROOFTOP", restype = "street_address") => {
  const geoUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&locationtype=${locType}&result_type=${restype}&key=${REACT_APP_GOOGLE_MAPS_API}`;
  return geoUrl;
};

export async function getAddress({ latitude, longitude }) {
  let address = "";
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
      // console.log("Dirección: ", JSON.stringify(address));
    } else if (addressData.status === "ZERO_RESULTS") {
      address = "No se encontró dirección.";
      console.log("La consulta no arrojó resultados: ", addressData.estatus);
    } else {
      address = `Error al consultar dirección: ${addressData.error_message}`;
      console.log(
        `Se ha presentado error ${addressData.estatus} al consultar la dirección: ${addressData.error_message}`
      );
    }
    return address;
  } catch (err) {
    console.log("Se ha presentado error al intentar traducir coordenadas: ", err);
  }
}
