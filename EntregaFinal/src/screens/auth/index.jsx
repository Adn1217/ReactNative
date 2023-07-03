import { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";

import { styles } from "./styles";
import { theme } from "../../constants";
import { signIn, register } from "../../store/actions/auth.action";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const title = isLogin ? "Login" : "Registro";
  const buttonTitle = isLogin ? "Login" : "Registro";
  const messageText = isLogin ? "¿No estás registrado?" : "¿Ya estás registrado?";
  const dispatch = useDispatch();

  const changeAuthType = () => {
    setIsLogin(!isLogin);
  };

  const handleAuth = () => {
    dispatch(isLogin ? signIn({ email, password }) : register({ email, password }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="email@gmail.com"
          placeholderTextColor={theme.colors.cancel}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder=""
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <TouchableOpacity
          style={styles.link}
          onPress={() => {
            changeAuthType();
          }}>
          <Text style={styles.linkText}>{messageText}</Text>
        </TouchableOpacity>
        <View style={styles.submitContainer}>
          <Button
            title={buttonTitle}
            color={theme.colors.secondary}
            onPress={() => {
              handleAuth();
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Auth;
