import { Text, TouchableHighlight, View } from 'react-native';
import { styles } from './styles.js';
import { theme } from '../constants/theme.js';

const Header = ({title}) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{title}</Text>
            <View style={styles.options}>
                <TouchableHighlight onPress={()=>{}} underlayColor={theme.colors.secondary} styles={styles.option} >
                    <Text style={styles.item}>Pending</Text>
                </TouchableHighlight>    
                <TouchableHighlight onPress={()=>{}} underlayColor={theme.colors.secondary} styles={styles.option}>
                    <Text style={styles.item}>In Progress</Text>
                </TouchableHighlight>    
                <TouchableHighlight onPress={()=>{}} underlayColor={theme.colors.secondary} styles={styles.option}>
                    <Text style={styles.item}>Completed</Text>
                </TouchableHighlight>    
                <TouchableHighlight onPress={()=>{}} underlayColor={theme.colors.secondary} styles={styles.option}>
                    <Text style={styles.item}>All</Text>
                </TouchableHighlight>    
            </View>
        </View>
    )
}

export default Header