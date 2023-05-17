import React, { useState } from 'react';
import { Text, View, Button, FlatList } from 'react-native';
import { styles } from './styles.js';
import { Input, Modal, Item, Header } from '../../components/index';
import { theme } from '../../constants/index.js';


  const CompletedScreen = ({workList, setWorkList, route, navigation}) => {
    const [text, setText] = React.useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [workListToShow, setWorkListToShow] = useState(workList.filter((item) => item.status === 'Completed')) 

    const workToRender = ({item}) => {
      return (<Item
        item = {item}
        button1Title={"Eliminar"}
        button1Color={"red"}
        onPressHandle={openDeleteModal}
        />)
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
          <Header title={"TO DO LIST"} navigation={navigation} route={route}/>
          <Text style={styles.title}>Actividades Completadas</Text>
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

  export default CompletedScreen;

