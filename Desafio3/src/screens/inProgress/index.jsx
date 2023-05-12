import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, FlatList } from 'react-native';
import { styles } from './styles.js';
import { Input, Modal, Item, Header } from '../../components/index';
import { theme } from '../../components/constants';


  const InProgressScreen = () => {
    const [text, setText] = React.useState('');
    const [workList, setWorkList] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    

    const workToRender = ({item}) => {
      return (<Item
        item = {item}
        buttonTitle={"Eliminar"}
        buttonColor={"red"}
        onPressHandle={openDeleteModal} />)
    }

    function deleteItem(itemDeleted){
      setWorkList(workList.filter((item) => item !== itemDeleted));
      setModalVisible(false);
    }

    function openDeleteModal(selectedItem){
      setModalVisible(true);
      setSelectedItem(selectedItem);
    }

    function cancelDeletion(){
      setSelectedItem(null)
      setModalVisible(false)
    }
    
    return (
      <View>
        <View style={styles.listContainer}>
          <Text style={styles.title}>Actividades en progreso</Text>
          <FlatList 
            renderItem={workToRender}
            data={workList}
            keyExtractor={(item) => item.id}
          />
        </View>
        <Modal 
          modalVisible={modalVisible}
          animation={"slide"}
          transparentModal={true}
          msg={"¿Está seguro de eliminar esta tarea?"}
          selectedItem={selectedItem}
          acceptButtonTitle={"Eliminar"}
          acceptButtonColor={theme.colors.warning}
          acceptHandler={deleteItem}
          denyButtonTitle={"Cancelar"}
          denyButtonColor={theme.colors.cancel}
          denyHandler={cancelDeletion}
        />
      </View>
    );
  }

  export default InProgressScreen;

