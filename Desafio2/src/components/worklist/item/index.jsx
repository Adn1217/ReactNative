
import React from "react";
import { Text, Button, View } from 'react-native';
import { styles } from './styles.js';

const workToRender = ({item, buttonTitle, buttonColor, onPressHandle}) => {
return (
    <View style={styles.listItem}>
        <Text style={styles.itemName}>
        {item.work}
        </Text>
        <Button 
        title={buttonTitle}
        color={buttonColor}
        style={styles.deleteButton}
        onPress={() => onPressHandle(item)} />
    </View>   
)}

export default workToRender;