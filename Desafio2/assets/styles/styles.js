import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContainer: {
    fontStyle: 'bold'
  },
  inputs: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  description: {
    marginTop: 10
  },
  listItem: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
    fontStyle: 'italic',
  },
  itemName: {
    marginRight: 10,
  },
  title: {
    fontSize: 25
  },
  textInput: {
    borderWidth: 1,
    width: 100,
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 5
  },
  deleteButton: {
    color: '#212121' 
  }
});