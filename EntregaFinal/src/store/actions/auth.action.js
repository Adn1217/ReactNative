import { registerFB, signInFB } from "../../db/firebase";
import { authTypes } from "../types/";

const { SIGN_IN, REGISTER } = authTypes;

export const register = ({ email, password }) => {
  return async (dispatch) => {
    try {
      const regResponse = await registerFB({ email, password });
      if (regResponse) {
        dispatch({
          type: REGISTER,
          token: regResponse.idToken,
          userId: regResponse.localId,
        });
      } else {
        console.error(
          "Se ha presentado error al intentar registrarse a Firebase. Es posible que el usuario ya se encuentre registrado. Verifique credenciales."
        );
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
      if (signResponse) {
        dispatch({
          type: SIGN_IN,
          token: signResponse.idToken,
          userId: signResponse.localId,
        });
      } else {
        console.error(
          "Se ha presentado error al intentar logearse a Firebase. Verifique credenciales."
        );
      }
    } catch (err) {
      console.err("Se ha presentado un error al intentar logearse desde Firebase: ", err);
    }
  };
};
