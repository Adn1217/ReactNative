import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, View, Button, FlatList, Modal } from 'react-native';
import { styles } from './assets/styles/styles.js';

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
      <View style={styles.inputs}>
        <Text style={styles.title}>To Do List</Text>
        <Text style={styles.description}>Lista de actividades a realizar</Text>
        {/* <StatusBar style="auto" /> */}
        <TextInput
          style={styles.textInput}
          placeholder="Ingrese Tarea"
          onChangeText={(text) => setThisWork(text)}
          value={text}/>
        <Button title="Agregar"
          onPress={() => addItem()} />
      </View>
      <FlatList style={styles.listContainer}
        renderItem={workToRender}
        data={workList}
        keyExtractor={(item) => item.id}
      />
      <Modal visible={modalVisible} 
      animationType='slide'
      transparent={true}>
        <View style={styles.modal}>
          <Text style={styles.title}>¿Está seguro de eliminar esta tarea?</Text>
          <View style={styles.modalButtons}> 
            <Button title="Eliminar"
              onPress={() => deleteItem(selectedItem)} />
            <Button title="Cancelar"
              color='gray'
              onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
}
