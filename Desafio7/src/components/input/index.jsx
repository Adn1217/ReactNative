import React from "react";
import { Text, TextInput, Button, View } from "react-native";

import { styles } from "./styles.js";

const Input = ({
  title,
  description,
  placeholder,
  value,
  buttonTitle,
  inputHandler,
  pressHandler,
  button2Title,
  button2Color,
  onPressHandler2,
}) => {
  const OptButton = () => {
    if (button2Title) {
      return (
        <Button
          title={button2Title}
          color={button2Color}
          style={styles.deleteButton}
          onPress={() => onPressHandler2()}
        />
      );
    } else {
      return null;
    }
  };
  return (
    <View style={styles.inputs}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        onChangeText={(text) => inputHandler(text)}
        value={value}
      />
      <Button title={buttonTitle} onPress={() => pressHandler()} disabled={value === ""} />
      <OptButton />
    </View>
  );
};

export default Input;
