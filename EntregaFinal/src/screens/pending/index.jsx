import React, { useEffect, useState } from "react";
import { Text, View, FlatList, TouchableWithoutFeedback, Keyboard } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { styles } from "./styles.js";
import { Input, Modal, Item, Header } from "../../components/index";
import { theme, ORIENTATION } from "../../constants/index.js";
import { deleteWork, insertWork, selectWorks, updateWork } from "../../db/sqlite/index.js";
import useOrientation from "../../hooks/useOrientation.jsx";
import { selectWorkListByStatus, selectWorksAction } from "../../store/actions/workItems.action.js";

const InputScreen = ({ workList, setWorkList, route, navigation }) => {
  const [text, setText] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const workListToShow = useSelector((state) => state.workList.filteredItems);
  const orientation = useOrientation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(selectWorkListByStatus("Pending"));
  }, []);

  const workToRender = ({ item }) => {
    return (
      <Item
        item={item}
        button1Title="Eliminar"
        button1Color="red"
        onPressHandle={openDeleteModal}
        button2Title="Iniciar"
        button2Color="lightgreen"
        onPressHandle2={beginWorkItem}
      />
    );
  };

  function setThisWork(text) {
    setText(text);
  }

  async function addItem() {
    try {
      if (text !== "") {
        await insertWork(text, "Pending");
        await selectWorks();
        dispatch(selectWorksAction());
        setText("");
      }
    } catch (err) {
      console.error("Se ha presentado un error al intentar guardar la tarea en BD: ", err);
    }
  }

  async function beginWorkItem(item) {
    item.status = "InProgress";
    const newItem = item;
    const newWorkList = [...workList];
    newWorkList.splice(
      workList.findIndex((workItem) => workItem.id === item.id),
      1,
      newItem
    );
    try {
      await updateWork(item.id, "InProgress");
      dispatch(selectWorksAction());
      setWorkList(newWorkList);
    } catch (err) {
      console.error("Se ha presentado error al intentar actualizar tarea en BD: ", err);
    }
  }

  async function deleteItem(itemToDelete) {
    try {
      await deleteWork(itemToDelete.id);
      dispatch(selectWorksAction());
      dispatch(selectWorkListByStatus("Pending"));
      setModalVisible(false);
    } catch (err) {
      console.error("Se ha presentado un error al intentar eliminar la tarea en BD: ", err);
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
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screenContainer}>
        <Header title="TO DO LIST" navigation={navigation} route={route} />
        <View
          style={
            orientation === ORIENTATION.PORTRAIT
              ? styles.listContainer
              : styles.listContainerLandscape
          }>
          <View
            style={
              orientation === ORIENTATION.PORTRAIT ? styles.inputPortrait : styles.inputLandscape
            }>
            <Input
              title="Nueva tarea"
              description="Planifique sus tareas"
              placeholder="Ingrese nueva tarea"
              value={text}
              buttonTitle="Agregar"
              inputHandler={setThisWork}
              pressHandler={addItem}
            />
          </View>
          <View
            style={
              orientation === ORIENTATION.PORTRAIT
                ? styles.flatListContainer
                : styles.flatListLandscape
            }>
            {workListToShow.length > 0 ? (
              <Text style={styles.title}>Actividades pendientes</Text>
            ) : null}
            <FlatList
              renderItem={workToRender}
              data={workListToShow}
              keyExtractor={(item) => item.id}
              style={styles.flatList}
            />
          </View>
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
    </TouchableWithoutFeedback>
  );
};

export default InputScreen;
