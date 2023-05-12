import { Text, TouchableHighlight, View } from 'react-native';
import { styles } from './styles.js';
import { theme } from '../constants/theme.js';

const Header = ({title, selectScreen}) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{title}</Text>
            <View style={styles.options}>
                <TouchableHighlight onPress={()=>{selectScreen('Pending')}} underlayColor={theme.colors.secondary} styles={styles.option} >
                    <Text style={styles.item}>Pending</Text>
                </TouchableHighlight>    
                <TouchableHighlight onPress={()=>{selectScreen('InProgress')}} underlayColor={theme.colors.secondary} styles={styles.option}>
                    <Text style={styles.item}>In Progress</Text>
                </TouchableHighlight>    
                <TouchableHighlight onPress={()=>{selectScreen('Completed')}} underlayColor={theme.colors.secondary} styles={styles.option}>
                    <Text style={styles.item}>Completed</Text>
                </TouchableHighlight>    
                <TouchableHighlight onPress={()=>{selectScreen('All')}} underlayColor={theme.colors.secondary} styles={styles.option}>
                    <Text style={styles.item}>All</Text>
                </TouchableHighlight>    
            </View>
        </View>
    )
}

export default Header