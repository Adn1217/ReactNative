import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, View, Button, FlatList } from 'react-native';
import { styles } from './assets/styles/styles.js';

export default function App() {

  const [text, setText] = React.useState();
  const [workList, setWorkList] = useState([]);

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
    setWorkList(workList.filter((item) => item !== itemDeleted))
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
        onPress={() => deleteItem(item)} />
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
    </View>
  );
}
