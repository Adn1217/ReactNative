import React, { useState } from 'react';
import { Text, View, FlatList} from 'react-native';
import { styles } from './styles.js';
import { Input, Modal, Item, Header } from '../../components/index';
import { theme } from '../../constants/index.js';


  const InProgressScreen = ({workList, setWorkList, route, navigation}) => {
    const [text, setText] = React.useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [workListToShow, setWorkListToShow] = useState(workList.filter((item) => item.status === 'InProgress')) 

    const workToRender = ({item}) => {
      return (<Item
        item = {item}
        button1Title={"Eliminar"}
        button1Color={"red"}
        onPressHandle={openDeleteModal}
        button2Title={"Terminar"}
        button2Color={"green"}
        onPressHandle2={completeWorkItem} />)
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
    
    function completeWorkItem(item){
      item.status = 'Completed';
      let newItem = item; 
      let newWorkList = [...workList];
      newWorkList.splice(workList.findIndex((workItem) => workItem.id === item.id),1,newItem)
      console.log('Nueva lista de tareas: ', newWorkList);
      setWorkList(newWorkList);
    }
    
    return (
      <View>
          <Header title={"TO DO LIST"} navigation={navigation} route={route} />
            <View style={styles.listContainer}>
              <Text style={styles.title}>Actividades en progreso</Text>
                  <FlatList 
                    renderItem={workToRender}
                    data={workListToShow}
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

