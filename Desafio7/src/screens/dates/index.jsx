import React, { useState } from "react";
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

import { styles } from "./styles.js";
import { Input, Header, Item, Modal } from "../../components/index";
import { theme, ORIENTATION } from "../../constants/index.js";
import useOrientation from "../../hooks/useOrientation.jsx";

const DatesScreen = ({ route, navigation, dateList, setDateList }) => {
  const [selected, setSelected] = useState("");
  const orientation = useOrientation();
  const [text, setText] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [inputVisible, setInputVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [dateListToShow, setDateListToShow] = useState(
    dateList.filter((item) => item.status === "Pending")
  );

  const dateListMarked = {};
  dateListToShow.forEach((date) => (dateListMarked[date.date] = { marked: true }));
  console.log("Fechas reservadas: ", dateListMarked);

  // "2023-06-10": { marked: true },
  function setSelection(day) {
    setInputVisible(true);
    setSelected(day);
    console.log("Selected day: ", day);
  }

  function setThisDate(text) {
    setText(text);
  }

  function addDate() {
    if (text !== "") {
      const newList = [
        ...dateList,
        {
          id: Math.random() * 1000,
          work: text,
          date: selected,
          status: "Pending",
        },
      ];
      console.log("Nueva lista de citas: ", newList);
      setDateList(newList);
      setText("");
    }
  }

  function deleteItem(itemDeleted) {
    const newDateList = dateList.filter((item) => item.id !== itemDeleted.id);
    console.log("Nueva lista de citas: ", newDateList);
    setDateList(newDateList);
    setModalVisible(false);
  }

  function openDeleteModal(selectedItem) {
    setModalVisible(true);
    setSelectedItem(selectedItem);
  }

  function cancelDeletion() {
    setSelectedItem(null);
    setModalVisible(false);
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

  const InputComponent = () => {
    if (inputVisible) {
      return (
        <Input
          title="Nueva cita"
          description="Planifique sus citas"
          placeholder="Ingrese nueva cita"
          value={text}
          buttonTitle="Agregar"
          inputHandler={setThisDate}
          pressHandler={addDate}
        />
      );
    } else {
      return null;
    }
  };

  const ListComponent = () => {
    if (dateListToShow.lenth > 0) {
      return (
        <View style={styles.flatListContainer}>
          <Text style={styles.title}>Citas pendientes</Text>
          <FlatList
            renderItem={dateToRender}
            data={dateListToShow}
            keyExtractor={(item) => item.id}
            style={styles.flatList}
          />
        </View>
      );
    } else {
      return null;
    }
  };

  function outsidePressHandler() {
    // eslint-disable-next-line no-unused-expressions
    Keyboard.dismiss;
    setSelected("");
    setText("");
    setInputVisible(false);
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
              />
            </View>
          ) : null}
          {dateListToShow.length > 0 ? (
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
      </View>
    </TouchableWithoutFeedback>
  );
};

export default DatesScreen;
