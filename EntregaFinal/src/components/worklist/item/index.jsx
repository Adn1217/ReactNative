import React from "react";
import { Text, Button, View } from "react-native";

import { styles } from "./styles.js";

const workToRender = ({
  item,
  button1Title,
  button1Color,
  button2Title,
  button2Color,
  onPressHandle,
  onPressHandle2,
}) => {
  const OptButton = () => {
    if (button2Title) {
      return (
        <Button
          title={button2Title}
          color={button2Color}
          style={styles.deleteButton}
          onPress={() => onPressHandle2(item)}
        />
      );
    } else {
      return null;
    }
  };

  return (
    <View style={{ ...styles.listItem, ...styles[item.status] }}>
      <View style={styles.itemNameContainer}>
        {item.date ? (
          <Text
            style={[
              styles.itemName,
              { fontWeight: "bold", paddingVertical: 0, paddingTop: 5, paddingBottom: 0 },
            ]}>
            {item.date}
          </Text>
        ) : null}
        <Text
          style={
            item.date
              ? [styles.itemName, { paddingVertical: 0, paddingTop: 0, paddingBottom: 5 }]
              : styles.itemName
          }>
          {item.date ? item.title : item.work}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title={button1Title}
          color={button1Color}
          style={styles.deleteButton}
          onPress={() => onPressHandle(item)}
        />
        <OptButton />
      </View>
    </View>
  );
};

export default workToRender;
