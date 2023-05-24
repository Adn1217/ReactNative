
import React from "react";
import { Text, Button, View } from 'react-native';
import { styles } from './styles.js';

const workToRender = ({item, button1Title, button1Color, button2Title, button2Color, onPressHandle, onPressHandle2}) => {

    const OptButton = () => {
        if(button2Title){
            return (<Button 
            title={button2Title}
            color={button2Color}
            style={styles.deleteButton}
            onPress={() => onPressHandle2(item)}/> )
        }else{
            return null
        }
    }
    
    return (
        <View style={styles.listItem}>
            <View style={styles[item.status]}>
                <Text style={styles.itemName}>
                {item.work}
                </Text>
                {/* <Text>
                    {item.status}
                </Text> */}
            </View>
            <Button 
            title={button1Title}
            color={button1Color}
            style={styles.deleteButton}
            onPress={() => onPressHandle(item)} />
            <OptButton />
        </View>   
    )
}

export default workToRender;