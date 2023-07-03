import { registerFB, signInFB } from "../../db/firebase";
import { authTypes } from "../types/";

const { SIGN_IN, REGISTER } = authTypes;

export const register = ({ email, password }) => {
  return async (dispatch) => {
    try {
      console.log("Se han recibido los datos: ", JSON.stringify({ email, password }));
      const regResponse = await registerFB({ email, password });
      console.log("Respuesta al registro: ", JSON.stringify(regResponse));
      if (regResponse) {
        dispatch({
          type: REGISTER,
          token: regResponse.idToken,
          userId: regResponse.localId,
        });
      } else {
        console.error("Se ha presentado error al intentar registrarse a Firebase.");
      }
    } catch (err) {
      console.err("Se ha presentado un error al intentar registrarse en Firebase: ", err);
    }
  };
};

export const signIn = ({ email, password }) => {
  return async (dispatch) => {
    try {
      const signResponse = await signInFB({ email, password });
      console.log("Respuesta al loggeo: ", signResponse);
      if (signResponse) {
        dispatch({
          type: SIGN_IN,
          token: signResponse.idToken,
          userId: signResponse.localId,
        });
      } else {
        console.error("Se ha presentado error al intentar logearse a Firebase.");
      }
    } catch (err) {
      console.err("Se ha presentado un error al intentar logearse desde Firebase: ", err);
    }
  };
};
