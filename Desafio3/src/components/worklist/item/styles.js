
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
    fontStyle: 'italic',
  },
  itemName: {
    marginRight: 10,
    minHeight: 35,
    minWidth: 200,
    textAlign: 'center'
  },
  deleteButton: {
  },
  Pending: {
    backgroundColor: 'orange',
  },
  InProgress: {
    backgroundColor: 'lightgreen',
  },
  Completed: {
    backgroundColor: 'green',
  }
})