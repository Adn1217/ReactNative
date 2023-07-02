import {
  REACT_APP_FIREBASE_REALTIME_DB_URL,
  REACT_APP_FIREBASE_API_KEY,
  REACT_APP_FIREBASE_AUTH_SIGN_IN_URL,
  REACT_APP_FIREBASE_AUTH_SIGN_UP_URL,
} from "@env";

console.log(
  `Variables de entorno: ${REACT_APP_FIREBASE_REALTIME_DB_URL} -- ${REACT_APP_FIREBASE_API_KEY} -- ${REACT_APP_FIREBASE_AUTH_SIGN_IN_URL} -- ${REACT_APP_FIREBASE_AUTH_SIGN_UP_URL}`
);

// export const init = () => {};

export const insertDateFB = async (localId, title, date, status, coords) => {
  try {
    const response = await fetch(`${REACT_APP_FIREBASE_REALTIME_DB_URL}dates.json`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        localId,
        date,
        title,
        status,
        coords,
      }),
    });
    const data = await response.json();
    console.log("Id insertado en Firebase: ", data);
    return data;
  } catch (err) {
    console.err("Se presentó error al intentar insertar la cita en Firebase: ", err.message);
  }
};

export const selectDateFB = async (name) => {
  try {
    const response = await fetch(`${REACT_APP_FIREBASE_REALTIME_DB_URL}/dates/${name}.json`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await response.json();
    // console.log("Data en Firebase: ", data);
    return data;
  } catch (err) {
    console.err("Se presentó error al intentar consultar la cita en Firebase: ", err.message);
  }
};

export const selectDateByLocalIdFB = async (localId) => {
  try {
    console.log("Local id: ", localId);
    const response = await fetch(
      `${REACT_APP_FIREBASE_REALTIME_DB_URL}/dates.json?orderBy="localId"&equalTo=${localId}`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log("Cita encontrada en Firebase: ", data);
    return data;
  } catch (err) {
    console.err("Se presentó error al intentar consultar la cita en Firebase: ", err.message);
  }
};

export const deleteDateFB = async (name) => {
  try {
    const response = await fetch(`${REACT_APP_FIREBASE_REALTIME_DB_URL}/dates/${name}.json`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = response.ok;
    console.log("Data eliminada en Firebase: ", data);
    return data;
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
    console.log("Citas desde Firebase: ", dates);
    return dates;
  } catch (err) {
    console.err("Se presentó error al intentar insertar la cita en Firebase: ", err.message);
  }
};
