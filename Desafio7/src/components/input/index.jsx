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
  const OptButton = ({ style = styles.button }) => {
    if (button2Title) {
      return (
        <View style={style}>
          <Button
            title={button2Title}
            color={button2Color}
            onPress={() => onPressHandler2()}
            disabled={value === ""}
          />
        </View>
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
      <View style={styles.buttons}>
        <Button title={buttonTitle} onPress={() => pressHandler()} disabled={value === ""} />
        <OptButton />
      </View>
    </View>
  );
};

export default Input;
