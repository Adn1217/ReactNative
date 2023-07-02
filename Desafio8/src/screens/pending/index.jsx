import React, { useEffect, useState } from "react";
import { Text, View, FlatList, TouchableWithoutFeedback, Keyboard } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { styles } from "./styles.js";
import { Input, Modal, Item, Header } from "../../components/index";
import { theme, ORIENTATION } from "../../constants/index.js";
import { deleteWork, insertWork, selectWorks, updateWork } from "../../db/sqlite/index.js";
import useOrientation from "../../hooks/useOrientation.jsx";
import {
  selectWorkListByStatus,
  selectWorksAction,
  updateWorkList,
} from "../../store/actions/workItems.action.js";

const InputScreen = ({ workList, setWorkList, route, navigation }) => {
  const [text, setText] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const workListToShow = useSelector((state) => state.workList.filteredItems);
  const orientation = useOrientation();
  const dispatch = useDispatch();
  console.log("Pendientes a mostrar: ", workListToShow);

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
        const newWork = {
          // id: Math.random() * 1000,
          work: text,
          status: "Pending",
        };
        // const newList = [...workList, newWork];
        // newWork.id = insertedWork.insertId;
        const insertedWork = await insertWork(text, "Pending");
        console.log("Id de nueva cita en BD: ", insertedWork.insertId);
        const newList = await selectWorks();
        console.log("Nueva lista de tareas: ", newList.rows._array);
        const dbWorkList = dispatch(selectWorksAction());
        // setWorkList(newList.rows._array);
        setText("");
      }
    } catch (err) {
      console.err("Se ha presentado un error al intentar guardar la tarea en BD: ", err);
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
      const updatedDBWork = await updateWork(item.id, "InProgress");
      console.log(updatedDBWork);
      dispatch(selectWorksAction());
      console.log("Nueva lista de tareas: ", newWorkList);
      setWorkList(newWorkList);
      // dispatch(selectWorkListByStatus("Pending"));
    } catch (err) {
      console.err("Se ha presentado error al intentar actualizar tarea en BD: ", err);
    }
  }

  async function deleteItem(itemToDelete) {
    // const newWorkList = workList.filter((item) => item.id !== itemToDelete.id);
    try {
      const deletedDBWork = await deleteWork(itemToDelete.id);
      console.log("Deleted DB work", deletedDBWork);
      // console.log("Nueva lista de tareas en BD: ", newWorkList);
      // setWorkList(newWorkList);
      // dispatch(updateWorkList(newWorkList));
      dispatch(selectWorksAction());
      dispatch(selectWorkListByStatus("Pending"));
      setModalVisible(false);
    } catch (err) {
      console.err("Se ha presentado un error al intentar eliminar la tarea en BD: ", err);
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
      <View>
        <View style={styles.listContainer}>
          <Header title="TO DO LIST" navigation={navigation} route={route} />
          <View
            style={
              orientation === ORIENTATION.PORTRAIT
                ? styles.listContainer
                : styles.listContainerLandscape
            }>
            <View style={orientation === ORIENTATION.PORTRAIT ? null : styles.inputLandscape}>
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
            <View style={styles.flatListContainer}>
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
