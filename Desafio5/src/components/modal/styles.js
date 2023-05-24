
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  modal: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 50,
    backgroundColor: '#E0E0E0',
    opacity: 0.9
  },
  title: {
    fontSize: 25
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
})