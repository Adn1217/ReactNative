import React, { useEffect, useState } from "react";
import { Text, View, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { styles } from "./styles.js";
import { Modal, Item, Header } from "../../components/index";
import { theme } from "../../constants/index.js";
import { deleteWork } from "../../db/sqlite/index.js";
import { selectWorkListByStatus, selectWorksAction } from "../../store/actions/workItems.action.js";

const CompletedScreen = ({ workList, setWorkList, route, navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const workListToShow = useSelector((state) => state.workList.filteredItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(selectWorkListByStatus("Completed"));
  }, []);

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
    try {
      await deleteWork(itemToDelete.id);
      dispatch(selectWorksAction());
      dispatch(selectWorkListByStatus("Completed"));
      setModalVisible(false);
    } catch (err) {
      console.err("Se ha presentado error al intengar eliminar tarea de BD: ", err);
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

export default CompletedScreen;
