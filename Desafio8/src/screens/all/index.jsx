import React, { useState } from "react";
import { Text, View, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { styles } from "./styles.js";
import { Modal, Item, Header } from "../../components/index";
import { theme } from "../../constants/index.js";
import { deleteWork } from "../../db/sqlite/index.js";
import { selectWorksAction } from "../../store/actions/workItems.action.js";

const AllScreen = ({ workList, setWorkList, route, navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const workListToShow = useSelector((state) => state.workList.items);
  const dispatch = useDispatch();

  const workToRender = ({ item }) => {
    return (
      <Item
        item={item}
        button1Title="Eliminar"
        button1Color="red"
        onPressHandle={openDeleteModal}
      />
    );
  };

  async function deleteItem(itemToDelete) {
    // setWorkList(workList.filter((item) => item.id !== itemToDelete.id));
    try {
      const deletedDBWork = await deleteWork(itemToDelete.id);
      console.log("Deleted DB work", deletedDBWork);
      // console.log("Nueva lista de tareas en BD: ", newWorkList);
      // setWorkList(newWorkList);
      dispatch(selectWorksAction());
      setModalVisible(false);
    } catch (err) {
      console.error("Se ha presentado error al intentar eliminar la tarea de BD: ", err);
    }
  }

  function openDeleteModal(selectedItem) {
    setModalVisible(true);
    setSelectedItem(selectedItem);
  }

  function cancelDeletion() {
    setSelectedItem(null);
    setModalVisible(false);
  }

  return (
    <View>
      <View style={styles.listContainer}>
        <Header title="TO DO LIST" navigation={navigation} route={route} />
        <Text style={styles.title}>Todas las actividades</Text>
        <FlatList
          renderItem={workToRender}
          data={workListToShow}
          keyExtractor={(item) => item.id}
          style={styles.flatList}
        />
      </View>
      <Modal
        modalVisible={modalVisible}
        animation="slide"
        transparentModal
        msg="¿Está seguro de eliminar esta tarea?"
        selectedItem={selectedItem}
        acceptButtonTitle="Eliminar"
        acceptButtonColor={theme.colors.warning}
        acceptHandler={deleteItem}
        denyButtonTitle="Cancelar"
        denyButtonColor={theme.colors.cancel}
        denyHandler={cancelDeletion}
      />
    </View>
  );
};

export default AllScreen;
