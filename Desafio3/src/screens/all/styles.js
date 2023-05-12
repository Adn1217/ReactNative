import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    listContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    Pending: {
        backgroundColor: 'orange'
    },
    InProgress: {
        backgroundColor: 'lightgreen'
    },
    Completed: {
        backgroundColor: 'green'
    }
})