import {
  REACT_APP_FIREBASE_REALTIME_DB_URL,
  REACT_APP_FIREBASE_AUTH_SIGN_IN_URL,
  REACT_APP_FIREBASE_AUTH_SIGN_UP_URL,
} from "@env";

export const insertDateFB = async (localId, title, date, status, coords = {}, token) => {
  try {
    const response = await fetch(`${REACT_APP_FIREBASE_REALTIME_DB_URL}dates.json?auth=${token}`, {
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
    return data;
  } catch (err) {
    console.error("Se presentó error al intentar insertar la cita en Firebase: ", err.message);
  }
};

export const selectDateFB = async (name, token) => {
  try {
    const response = await fetch(
      `${REACT_APP_FIREBASE_REALTIME_DB_URL}/dates/${name}.json?auth=${token}`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Se presentó error al intentar consultar la cita en Firebase: ", err.message);
  }
};

export const selectDateByLocalIdFB = async (localId, token) => {
  try {
    const response = await fetch(
      `${REACT_APP_FIREBASE_REALTIME_DB_URL}/dates.json?auth=${token}&orderBy="localId"&equalTo=${localId}`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const data = await response.json();
    // console.log("Cita encontrada en Firebase: ", data);
    return data;
  } catch (err) {
    console.error("Se presentó error al intentar consultar la cita en Firebase: ", err.message);
  }
};

export const deleteDateFB = async (name, token) => {
  try {
    const response = await fetch(
      `${REACT_APP_FIREBASE_REALTIME_DB_URL}/dates/${name}.json?auth=${token}`,
      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const data = response.ok;
    // console.log("Data eliminada en Firebase: ", data);
    return data;
  } catch (err) {
    console.error("Se presentó error al intentar insertar la cita en Firebase: ", err.message);
  }
};

export const selectDatesFB = async (token) => {
  try {
    const response = await fetch(`${REACT_APP_FIREBASE_REALTIME_DB_URL}/dates.json?auth=${token}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await response.json();
    const dates = Object.keys(data).map((key) => ({ ...data[key], id: key }));
    // console.log("Citas desde Firebase: ", dates);
    return dates;
  } catch (err) {
    console.error("Se presentó error al intentar insertar la cita en Firebase: ", err.message);
  }
};

export const registerFB = async ({ email, password }) => {
  try {
    const response = await fetch(`${REACT_APP_FIREBASE_AUTH_SIGN_UP_URL}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true,
      }),
    });
    if (!response.ok) {
      return false;
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Se presentó error al intentar registrarse desde Firebase: ", err.message);
  }
};

export const signInFB = async ({ email, password }) => {
  try {
    const response = await fetch(`${REACT_APP_FIREBASE_AUTH_SIGN_IN_URL}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true,
      }),
    });
    if (!response.ok) {
      return false;
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Se presentó error al intentar loggearse desde Firebase: ", err.message);
  }
};
