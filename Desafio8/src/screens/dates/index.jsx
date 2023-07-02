import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  FlatList,
  ScrollView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Calendar } from "react-native-calendars";
import { useSelector, useDispatch } from "react-redux";

import { styles } from "./styles.js";
import { Input, Header, Item, Modal, LocationSelector } from "../../components/index";
import { theme, ORIENTATION } from "../../constants/index.js";
import { selectDates, insertDate, deleteDate } from "../../db/sqlite/index.js";
import useOrientation from "../../hooks/useOrientation.jsx";
import { deleteDateToFB, insertDateToFB } from "../../store/actions/dateItems.action.js";

const DatesScreen = ({ route, navigation, dateList, setDateList }) => {
  const [selected, setSelected] = useState("");
  const orientation = useOrientation();
  const [text, setText] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [inputVisible, setInputVisible] = useState(false);
  const [locationVisible, setLocationVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  // const pendingDates = useSelector((state) => state.dateList.items);
  // setDateList(pendingDates || []);
  const [dateListToShow, setDateListToShow] = useState(
    dateList.filter((item) => item.status === "Pending")
  );
  const [dateLocation, setDateLocation] = useState({});
  const dispatch = useDispatch();
  const dateListMarked = {};
  dateListToShow.forEach((date) => (dateListMarked[date.date] = { marked: true }));
  console.log("Fechas reservadas: ", dateListMarked);
  console.log("Citas a mostrar: ", dateListToShow);
  // console.log("Citas: ", dateList);

  function setSelection(day) {
    setInputVisible(true);
    setSelected(day);
  }

  function setThisDate(text) {
    setText(text);
  }

  function openLocationInput() {
    setLocationVisible(true);
  }
  function setCurrentLocation(location) {
    setDateLocation(location);
  }

  async function addDate() {
    const newDate = {
      // id: Math.random() * 1000,
      work: text,
      date: selected,
      status: "Pending",
      location: dateLocation,
    };
    if (text !== "") {
      try {
        const insertedDate = await insertDate(text, selected, "Pending", dateLocation);
        console.log("Id de nueva cita en BD: ", insertedDate.insertId);
        newDate.id = insertedDate.insertId;
        // const insertedDateFB = await insertDateFB(text, selected, "Pending", dateLocation);
        const dbDatesListFB = dispatch(
          insertDateToFB(newDate.id, text, selected, "Pending", dateLocation)
        );
        // const newList = [...dateList, newDate];
        // console.log("Nueva lista de citas en FB: ", dbDatesListFB);
        const dbDatesList = await selectDates();
        console.log("Nueva lista de citas: ", dbDatesList.rows._array);
        setDateList(dbDatesList.rows._array);
        setText("");
      } catch (err) {
        console.err("Se ha presentador error intentado eliminar una cita: ", err);
      }
    }
  }

  async function deleteItem(itemToDelete) {
    const newDateList = dateList.filter((item) => item.id !== itemToDelete.id);
    // console.log("Elemento a eliminar: ", itemToDelete);
    try {
      const deletedDBDate = await deleteDate(itemToDelete.id);
      console.log("Deleted date", deletedDBDate);
      console.log("Nueva lista de citas: ", newDateList);
      dispatch(deleteDateToFB(itemToDelete.id));
      setDateList(newDateList);
      setModalVisible(false);
    } catch (err) {
      console.err("Se ha presentado error intendo eliminar una cita: ", err);
    }
  }

  function openDeleteModal(selectedItem) {
    console.log("Selected Item: ", selectedItem);
    setModalVisible(true);
    setSelectedItem(selectedItem);
  }

  function cancelDeletion() {
    setSelectedItem(null);
    setModalVisible(false);
    setLocationVisible(false);
  }

  const dateToRender = ({ item }) => {
    return (
      <Item
        item={item}
        button1Title="Eliminar"
        button1Color="red"
        onPressHandle={openDeleteModal}
        // button2Title={"Iniciar"}
        // button2Color={"lightgreen"}
        // onPressHandle2={beginWorkItem}
      />
    );
  };

  // const InputComponent = () => {
  //   if (inputVisible) {
  //     return (
  //       <Input
  //         title="Nueva cita"
  //         description="Planifique sus citas"
  //         placeholder="Ingrese nueva cita"
  //         value={text}
  //         buttonTitle="Agregar"
  //         inputHandler={setThisDate}
  //         pressHandler={addDate}
  //         button2Title="Ubicación"
  //         button2Color="blue"
  //         onPressHandler2={openLocationInput}
  //       />
  //     );
  //   } else {
  //     return null;
  //   }
  // };

  // const ListComponent = () => {
  //   if (dateListToShow.lenth > 0) {
  //     return (
  //       <View style={styles.flatListContainer}>
  //         <Text style={styles.title}>Citas pendientes</Text>
  //         <FlatList
  //           renderItem={dateToRender}
  //           data={dateListToShow}
  //           keyExtractor={(item) => item.id}
  //           style={styles.flatList}
  //         />
  //       </View>
  //     );
  //   } else {
  //     return null;
  //   }
  // };

  function outsidePressHandler() {
    // eslint-disable-next-line no-unused-expressions
    Keyboard.dismiss;
    setSelected("");
    setText("");
    setInputVisible(false);
    setLocationVisible(false);
  }
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        outsidePressHandler();
      }}>
      <View
        style={
          orientation === ORIENTATION.PORTRAIT
            ? styles.screenContainer
            : styles.screenContainerLandscape
        }>
        <Header title="TO DO LIST" navigation={navigation} route={route} />
        <View
          style={
            orientation === ORIENTATION.PORTRAIT
              ? styles.calendarContainer
              : styles.calendarContainerLandscape
          }>
          <View
            style={
              orientation === ORIENTATION.PORTRAIT
                ? styles.datesContainer
                : styles.datesContainerLandscape
            }>
            <Text
              style={orientation === ORIENTATION.PORTRAIT ? styles.title : styles.titleLandscape}>
              Dates Screen
            </Text>
            <ScrollView
              style={orientation === ORIENTATION.PORTRAIT ? null : styles.scrollViewLandscape}>
              <Calendar
                onDayPress={(day) => setSelection(day.dateString)}
                markedDates={{
                  [selected]: {
                    selected: true,
                    disableTouchEvent: true,
                    selectedDotColor: "orange",
                  },
                  ...dateListMarked,
                  // "2023-06-10": { marked: true },
                }}
                style={
                  orientation === ORIENTATION.PORTRAIT ? styles.calendar : styles.calendarLandscape
                }
              />
            </ScrollView>
          </View>
          {inputVisible ? (
            <View
              style={
                orientation === ORIENTATION.PORTRAIT
                  ? styles.inputComponent
                  : styles.inputComponentLandscape
              }>
              <Input
                title="Nueva cita"
                description="Planifique sus citas"
                placeholder="Ingrese nueva cita"
                value={text}
                buttonTitle="Agregar"
                inputHandler={setThisDate}
                pressHandler={addDate}
                button2Title="Ubicación"
                button2Color="blue"
                onPressHandler2={openLocationInput}
              />
            </View>
          ) : null}
          {locationVisible ? <LocationSelector onLocation={setCurrentLocation} /> : null}
          {!inputVisible && dateListToShow.length > 0 ? (
            <View
              style={
                orientation === ORIENTATION.PORTRAIT
                  ? styles.flatListPortrait
                  : styles.flatListContainer
              }>
              <Text
                style={orientation === ORIENTATION.PORTRAIT ? styles.title : styles.titleLandscape}>
                Citas pendientes
              </Text>
              <FlatList
                renderItem={dateToRender}
                data={dateListToShow}
                keyExtractor={(item) => item.id}
                style={styles.flatList}
              />
            </View>
          ) : null}
          <Modal
            modalVisible={modalVisible}
            animation="slide"
            transparentModal
            msg="¿Está seguro de eliminar esta cita?"
            selectedItem={selectedItem}
            acceptButtonTitle="Eliminar"
            acceptButtonColor={theme.colors.warning}
            acceptHandler={deleteItem}
            denyButtonTitle="Cancelar"
            denyButtonColor={theme.colors.cancel}
            denyHandler={cancelDeletion}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default DatesScreen;
