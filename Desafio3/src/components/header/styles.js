
import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    header: {
        minheight: '10%',
        backgroundColor: '#0A2463',
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitle: {
        fontSize: 25,
        color: 'white',
    },
    options: {
        // flex: 1,
        width: '100%',
        flexDirection: 'row',
        // justifyContent: 'space-around',
        textAlign: 'center'
    },
    option: {
        justifyContent: 'center',
    },
    item: {
        color: 'white',
        minWidth: '25%',
        paddingVertical: '2%',
        textAlign: 'center',
    }

})