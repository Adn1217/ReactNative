import React, { useState } from 'react';
import { Text, View, FlatList } from 'react-native';
import { styles } from './styles.js';
import { Modal, Item, Header } from '../../components/index';
import { theme } from '../../constants/index.js';
import { useSelector, useDispatch } from 'react-redux';
import { selectWorkListByStatus, updateWorkList } from '../../store/actions/workItems.action.js';

  const CompletedScreen = ({workList, setWorkList, route, navigation}) => {
    const [text, setText] = React.useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const workListToShow = useSelector((state) => state.workList.filteredItems);
    // const [workListToShow, setWorkListToShow] = useState(workList.filter((item) => item.status === 'Completed'))
    const dispatch = useDispatch();

    const workToRender = ({item}) => {
      return (<Item
        item = {item}
        button1Title={"Eliminar"}
        button1Color={"red"}
        onPressHandle={openDeleteModal}
        />)
    }

    function deleteItem(itemDeleted){
      const newWorkList = workList.filter((item) => item !== itemDeleted);
      setWorkList(newWorkList);
      dispatch(updateWorkList(newWorkList))
      dispatch(selectWorkListByStatus('Completed'));
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
            style={styles.flatList}
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

