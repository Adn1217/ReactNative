
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, FlatList } from 'react-native';
import { styles } from '../assets/styles/styles.js';
import { Input, Modal } from './components/index';

export default function App() {

  const [text, setText] = React.useState();
  const [workList, setWorkList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  function setThisWork(text) {
    setText(text);
  }

  function addItem(){
    if (text !== ''){
      let newList = [...workList, {id: Math.random()*1000, work: text}]
      setWorkList(newList)
      setText('');
    }
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

  const workToRender = ({item}) => {
    return (
    <View style={styles.listItem}>
      <Text style={styles.itemName}>
        {item.work}
      </Text>
      <Button title="Eliminar"
        color ='red'
        style={styles.deleteButton}
        onPress={() => openDeleteModal(item)} />
    </View>   
    )}

  return (
    <View style={styles.container}>
     <Input 
      placeholder = {"Ingrese tarea"}
      value={text}
      buttonTitle={"Agregar"} 
      inputHandler={setThisWork}
      pressHandler={addItem}
      />
      <FlatList style={styles.listContainer}
        renderItem={workToRender}
        data={workList}
        keyExtractor={(item) => item.id}
      />
      <Modal 
        modalVisible={modalVisible}
        animation={"slide"}
        transparentModal={true}
        msg={"¿Está seguro de eliminar esta tarea?"}
        selectedItem={selectedItem}
        acceptButtonTitle={"Eliminar"}
        acceptButtonColor={"red"}
        acceptHandler={deleteItem}
        denyButtonTitle={"Cancelar"}
        denyButtonColor={"gray"}
        denyHandler={cancelDeletion}
      />
    </View>
  );
}
