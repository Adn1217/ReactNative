import React from "react";
import { Text, TextInput, Button, View } from 'react-native';
import { styles } from './styles.js';

const Input = ({placeholder, value, buttonTitle, inputHandler, pressHandler}) => {
    return (
        <View style={styles.inputs}>
            <Text style={styles.title}>To Do List</Text>
            <Text style={styles.description}>Lista de actividades a realizar</Text>
            {/* <StatusBar style="auto" /> */}
            <TextInput
                style={styles.textInput}
                placeholder={placeholder}
                onChangeText={(text) => inputHandler(text)}
                value={value}/>
            <Button title={buttonTitle}
            onPress={() => pressHandler()} />
        </View>
    )
}

export default Input;