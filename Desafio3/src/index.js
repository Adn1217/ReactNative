
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, FlatList } from 'react-native';
import { styles } from '../assets/styles/styles.js';
import { Input, Modal, Item, Header } from './components/index';

export default function App() {

  const [text, setText] = React.useState('');
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
    return (<Item
      item = {item}
      buttonTitle={"Eliminar"}
      buttonColor={"red"}
      onPressHandle={openDeleteModal} />)
  }

  return (
    <View style={styles.container}>
     <Header title={"TO DO LIST"} />
     <Input title={"Nueva tarea"}
      description={"Planifique sus tareas"}
      placeholder = {"Ingrese nueva tarea"}
      value={text}
      buttonTitle={"Agregar"} 
      inputHandler={setThisWork}
      pressHandler={addItem}
      />
      <View style={styles.listContainer}>
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
        acceptButtonColor={"red"}
        acceptHandler={deleteItem}
        denyButtonTitle={"Cancelar"}
        denyButtonColor={"gray"}
        denyHandler={cancelDeletion}
      />
    </View>
  );
}
