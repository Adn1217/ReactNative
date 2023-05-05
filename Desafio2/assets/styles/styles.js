import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  },
  listContainer: {
    fontWeight: 'bold',
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
    width: 200,
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 5,
    textAlign: 'center'
  },
  deleteButton: {
  },
  modal: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 50,
    backgroundColor: '#E0E0E0',
    opacity: 0.9
  },
  modalDescription: {
    fontWeight: 'bold'
  },
  modalButtons: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
    marginBottom: 10,
    // alignItems: 'center',
    justifyContent: 'space-between',
  }
});