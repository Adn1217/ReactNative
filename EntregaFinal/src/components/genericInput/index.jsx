import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import { styles } from "./styles";
import { theme } from "../../constants";
import Label from "../genericLabel";

const GenericInput = ({
  type = "default",
  editable,
  children,
  value,
  onChangeText,
  onFocus,
  onBlur,
  maxLength,
  placeholder,
  placeholderTextColor = theme.colors.cancel,
  keyboardType = "default",
  hasError,
  error,
  touched,
  ...props
}) => {
  const [hidePwd, setHidePwd] = useState(type === "password");

  function handleHidePwd() {
    setHidePwd(!hidePwd);
  }

  return (
    <View style={styles.container}>
      <Label {...props}>
        <View style={styles.inputContainer}>
          <TextInput
            {...props}
            editable={editable}
            value={value}
            style={styles.input}
            onChangeText={onChangeText}
            onFocus={onFocus}
            onBlur={onBlur}
            maxLength={maxLength}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            keyboardType={keyboardType}
            secureTextEntry={hidePwd}
          />
          {type === "password" ? (
            <TouchableOpacity
              onPress={() => {
                handleHidePwd();
              }}
              style={styles.eyeIcon}>
              <Ionicons
                name={hidePwd ? "eye" : "eye-off"}
                size={styles.eyeIcon.fontSize}
                color={theme.colors.secondary}
              />
            </TouchableOpacity>
          ) : null}
        </View>
      </Label>
      {hasError && touched ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorMessage}>{error}</Text>
        </View>
      ) : null}
    </View>
  );
};

export default GenericInput;
