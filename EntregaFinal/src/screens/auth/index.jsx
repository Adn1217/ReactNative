import { useReducer, useState } from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";

import { styles } from "./styles";
import { GenericInput } from "../../components/index";
import { theme } from "../../constants";
import { signIn, register } from "../../store/actions/auth.action";
import { UPDATE_FORM, onInputChange } from "../../utils/form";

const initialState = {
  email: { value: "", error: "", touched: false, hasError: true },
  password: { value: "", error: "", touched: false, hasError: true },
  isFormValid: false,
};

const formReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_FORM:
      // eslint-disable-next-line no-case-declarations
      const { name, value, hasError, error, touched, isFormValid } = action.data;
      return { ...state, [name]: { ...state[name], value, hasError, error, touched }, isFormValid };
  }
};

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formState, dispatchFormState] = useReducer(formReducer, initialState);
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const title = isLogin ? "Login" : "Registro";
  const buttonTitle = isLogin ? "Login" : "Registro";
  const messageText = isLogin ? "¿No estás registrado?" : "¿Ya estás registrado?";
  const dispatch = useDispatch();

  const changeAuthType = () => {
    setIsLogin(!isLogin);
  };

  const handleAuth = () => {
    dispatch(
      isLogin
        ? signIn({ email: formState.email.value, password: formState.password.value })
        : register({ email: formState.email.value, password: formState.password.value })
    );
  };

  const handleInputChange = ({ name, value }) => {
    onInputChange({ name, value, dispatch: dispatchFormState, formState });
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <GenericInput
          placeholder="email@gmail.com"
          placeholderTextColor={theme.colors.cancel}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) => handleInputChange({ value: text, name: "email" })}
          value={formState.email.value}
          label="Email"
          error={formState.email.error}
          touched={formState.email.touched}
          hasError={formState.email.hasError}
        />
        <GenericInput
          placeholder="********"
          type="password"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) => handleInputChange({ value: text, name: "password" })}
          value={formState.password.value}
          label="Password"
          error={formState.password.error}
          touched={formState.password.touched}
          hasError={formState.password.hasError}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.link}
            onPress={() => {
              changeAuthType();
            }}>
            <Text style={styles.linkText}>{messageText}</Text>
          </TouchableOpacity>
          <View style={styles.submitContainer}>
            <Button
              disabled={!formState.isFormValid}
              title={buttonTitle}
              color={theme.colors.secondary}
              onPress={() => {
                handleAuth();
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Auth;
