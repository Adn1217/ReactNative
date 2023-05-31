import { Text, TouchableHighlight, View } from 'react-native';
import { styles } from './styles.js';
import { theme } from '../../constants/theme.js';
import { selectStatus } from '../../store/actions/workItems.action.js';
import { useDispatch } from 'react-redux';

const Header = ({title, navigation, route}) => {
    const dispatch = useDispatch();

    function selectScreen(category) {
        dispatch(selectStatus(category));
        navigation.navigate(category, {category: category, underlined: true});
    };
    
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{title}</Text>
            <View style={styles.options}>
                <TouchableHighlight onPress={()=>{selectScreen('Pending')}} underlayColor={theme.colors.secondary} styles={styles.option} >
                    <Text style={(route.params?.category==='Pending' && route.params?.underlined) ? {...styles.item, ...styles.itemSelected} : styles.item}>Pendientes</Text>
                </TouchableHighlight>    
                <TouchableHighlight onPress={()=>{selectScreen('InProgress')}} underlayColor={theme.colors.secondary} styles={styles.option}>
                    <Text style={(route.params?.category==='InProgress' && route.params?.underlined) ? {...styles.item, ...styles.itemSelected} : styles.item}>En Progreso</Text>
                </TouchableHighlight>    
                <TouchableHighlight onPress={()=>{selectScreen('Completed')}} underlayColor={theme.colors.secondary} styles={styles.option}>
                    <Text style={(route.params?.category==='Completed' && route.params?.underlined) ? {...styles.item, ...styles.itemSelected} : styles.item}>Completadas</Text>
                </TouchableHighlight>    
                <TouchableHighlight onPress={()=>{selectScreen('All')}} underlayColor={theme.colors.secondary} styles={styles.option}>
                    <Text style={(route.params?.category==='All' && route.params?.underlined) ? {...styles.item, ...styles.itemSelected} : styles.item}>Todas</Text>
                </TouchableHighlight>    
            </View>
        </View>
    )
}

export default Header