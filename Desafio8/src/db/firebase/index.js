import {
  REACT_APP_FIREBASE_REALTIME_DB_URL,
  REACT_APP_FIREBASE_API_KEY,
  REACT_APP_FIREBASE_AUTH_SIGN_IN_URL,
  REACT_APP_FIREBASE_AUTH_SIGN_UP_URL,
} from "@env";

console.log(
  `Variables de entorno: ${REACT_APP_FIREBASE_REALTIME_DB_URL} -- ${REACT_APP_FIREBASE_API_KEY} -- ${REACT_APP_FIREBASE_AUTH_SIGN_IN_URL} -- ${REACT_APP_FIREBASE_AUTH_SIGN_UP_URL}`
);

export const init = () => {};

export const insertDateFB = async (title, date, status, coords) => {
  try {
    const response = await fetch(`${REACT_APP_FIREBASE_REALTIME_DB_URL}dates.json`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        date,
        title,
        status,
        coords,
      }),
    });
    const data = await response.json();
    console.log("Data insertada en Firebase: ", data);
    return data;
  } catch (err) {
    console.err("Se presentó error al intentar insertar la cita en Firebase: ", err.message);
  }
};

export const deleteDateFB = async (id) => {
  try {
    const response = await fetch(`${REACT_APP_FIREBASE_REALTIME_DB_URL}/dates/${id}.json`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await response.json();
    console.log("Data eliminada en Firebase: ", data);
  } catch (err) {
    console.err("Se presentó error al intentar insertar la cita en Firebase: ", err.message);
  }
};

export const selectDatesFB = async () => {
  try {
    const response = await fetch(`${REACT_APP_FIREBASE_REALTIME_DB_URL}/dates.json`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await response.json();
    const dates = Object.keys(data).map((key) => ({ ...data[key], id: key }));
    console.log("Respuesta de Firebase: ", dates);
  } catch (err) {
    console.err("Se presentó error al intentar insertar la cita en Firebase: ", err.message);
  }
};
