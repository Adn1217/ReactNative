import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    listContainer: {
        // flexDirection: 'column',
        // fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
    },
    listContainerLandscape: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        // height: '100%',
        fontWeight: 'bold',
        alignItems: 'flex-start',
        // justifyContent: 'center',
    },
    inputLandscape:{
        // maxHeight: 100,
        // maxWidth: 200
        marginHorizontal: 100,
    },
    flatList: {
        // maxHeight: 450,
        marginTop: '5%',
        maxHeight: '64%'
        // marginBottom: 280
    },
    flatListContainer: {
        maxWidth: 400,
        alignItems: 'center',
        // flexDirection: 'column',
    }
});