import { authTypes } from "../types/auth.types";
const { SIGN_IN, REGISTER } = authTypes;

const initialState = {
  userId: null,
  token: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      console.log(
        "Credenciales de acceso: ",
        JSON.stringify({ token: action.token, userId: action.userId })
      );
      return { ...state, token: action.token, userId: action.userId };
    case REGISTER:
      console.log(
        "Credenciales de acceso: ",
        JSON.stringify({ token: action.token, userId: action.userId })
      );
      return { ...state, token: action.token, userId: action.userId };
    default:
      return state;
  }
};

export default authReducer;
