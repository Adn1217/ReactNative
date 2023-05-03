import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, View, Button } from 'react-native';
import { styles } from './assets/styles/styles.js';

export default function App() {

  const [text, setText] = React.useState();
  const [workList, setWorkList] = React.useState([]);

  function setThisWork(text) {
    setText(text);
  }

  function addItem(){
    if (text !== ''){
      let newList = [...workList, text]
      setWorkList(newList)
      setText('');
    }
  }

  function deleteItem(itemDeleted){
    // let newWorkList = workList;
    // let itemIndex = workList.indexOf(itemDeleted)
    // let deletedItem= newWorkList.splice(itemIndex,1);
    // setWorkList(newWorkList);
    // setText('');
    setWorkList(workList.filter((item) => item !== itemDeleted))
  }

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
      <View style={styles.listContainer}>
        {
          workList.map((item) => {
            return(
              < View style={styles.listItem} key={Math.random()*1000}>
                <Text style={styles.itemName}>
                  {item}
                </Text>
                <Button title="Eliminar" color ='red'
                  style={styles.deleteButton}
                  onPress={() => deleteItem(item)} />
              </View> 
            )
          })
        }
      </View>
    </View>
  );
}
