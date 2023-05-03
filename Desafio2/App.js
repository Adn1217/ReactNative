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
              <Text style={styles.listItem} key={Math.random()*1000}>
                {item}
              </Text>
            )
          })
        }
      </View>
    </View>
  );
}
