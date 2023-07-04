const emailFormat = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const minPwdLength = 7;
export const UPDATE_FORM = "UPDATE_FORM";

function validateInput({ name, value }) {
  let hasError = false;
  let error = "";
  const noSpaceValue = value.trim();
  console.log(noSpaceValue);

  switch (name) {
    case "email":
      if (noSpaceValue === "") {
        hasError = true;
        error = "Email requerido.";
      } else if (!emailFormat.test(noSpaceValue)) {
        hasError = true;
        error = "Email inválido.";
      } else {
        hasError = false;
        error = "";
      }
      break;
    case "password":
      if (noSpaceValue.length < minPwdLength) {
        hasError = true;
        error = `La contraseña debe tener al menos ${minPwdLength} caracteres.`;
      } else {
        hasError = false;
        error = "";
      }
      break;
    default:
      break;
  }
  return { hasError, error };
}

export const onInputChange = ({ name, value, dispatch, formState }) => {
  const { hasError, error } = validateInput({ name, value });
  let isFormValid = true;
  console.log("onInputChange recibe: ", name, value);
  for (const key in formState) {
    const item = formState[key];
    if (key === name && hasError) {
      isFormValid = false;
      break;
    } else if (key !== name && item.hasError) {
      isFormValid = false;
      break;
    }
  }
  dispatch({
    type: UPDATE_FORM,
    data: {
      name,
      value,
      hasError,
      error,
      touched: true,
      isFormValid,
    },
  });
};
