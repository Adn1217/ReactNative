import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { styles } from './styles.js';
import { Input, Modal, Item, Header } from '../../components/index';
import { theme, ORIENTATION } from '../../constants/index.js';
import useOrientation from '../../hooks/useOrientation.jsx';

  const InputScreen = ({workList, setWorkList, route, navigation}) => {
    const [text, setText] = React.useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [workListToShow, setWorkListToShow] = useState(workList.filter((item) => item.status === 'Pending'))
    const orientation = useOrientation();

    const workToRender = ({item}) => {
      return (<Item
        item = {item}
        button1Title={"Eliminar"}
        button1Color={"red"}
        onPressHandle={openDeleteModal}
        button2Title={"Iniciar"}
        button2Color={"lightgreen"}
        onPressHandle2={beginWorkItem}
         />)
    }

    function setThisWork(text) {
      setText(text);
    }

    function addItem(){
      if (text !== ''){
        let newList = [...workList, {
          id: Math.random()*1000, 
          work: text, 
          status: 'Pending'}]
        console.log('Nueva lista de tareas: ', newList);
        setWorkList(newList)
        setText('');
      }
    }

    function beginWorkItem(item){
      item.status = 'InProgress';
      let newItem = item;
      let newWorkList = [...workList];
      newWorkList.splice(workList.findIndex((workItem) => workItem.id === item.id),1,newItem)
      console.log('Nueva lista de tareas: ', newWorkList);
      setWorkList(newWorkList);
    }

    function deleteItem(itemDeleted){
      let newWorkList = workList.filter((item) => item.id !== itemDeleted.id);
      console.log('Nueva lista de tareas: ', newWorkList);
      setWorkList(newWorkList);
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
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View>
          <View style={styles.listContainer}>
            <Header title={"TO DO LIST"} navigation={navigation} route={route} />
            <View style={orientation === ORIENTATION.PORTRAIT ? styles.listContainer : styles.listContainerLandscape}>
              <View style={orientation === ORIENTATION.PORTRAIT ? null : styles.inputLandscape}>
                <Input title={"Nueva tarea"}
                  description={"Planifique sus tareas"}
                  placeholder = {"Ingrese nueva tarea"}
                  value={text}
                  buttonTitle={"Agregar"} 
                  inputHandler={setThisWork}
                  pressHandler={addItem}
                  />
              </View>
              <View style={styles.flatListContainer}>
                {workListToShow.length > 0 ? <Text style={styles.title}>Actividades pendientes</Text> : null}
                <FlatList 
                  renderItem={workToRender}
                  data={workListToShow}
                  keyExtractor={(item) => item.id}
                  style={styles.flatList}
                />
              </View>
            </View>
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
      </TouchableWithoutFeedback>
    );
  }

  export default InputScreen;

