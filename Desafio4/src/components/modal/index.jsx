
import React from "react";
import { Text, Button, View, Modal } from 'react-native';
import { styles } from './styles.js';

const confirmationModal = ({modalVisible, animation, transparentModal, msg, selectedItem, acceptButtonTitle, acceptButtonColor, acceptHandler, denyButtonTitle, denyButtonColor, denyHandler}) => {
    return (
      <Modal 
        visible={modalVisible} 
        animationType={animation}
        transparent={transparentModal}>
        <View style={styles.modal}>
          <Text style={styles.title}>{msg}</Text>
          <Text style={styles.modalDescription}>Id: {selectedItem?.id}</Text>
          <View style={styles.modalButtons}> 
            <Button title={acceptButtonTitle}
              color={acceptButtonColor}
              onPress={() =>acceptHandler(selectedItem)} />
            <Button title={denyButtonTitle}
              color={denyButtonColor}
              onPress={() => denyHandler()} />
          </View>
        </View>
      </Modal>)
}

export default confirmationModal;