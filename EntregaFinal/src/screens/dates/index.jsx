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
import { Input, Item, Modal, LocationSelector } from "../../components/index";
import { theme, ORIENTATION } from "../../constants/index.js";
import { insertDate, deleteDate } from "../../db/sqlite/index.js";
import useOrientation from "../../hooks/useOrientation.jsx";
import {
  deleteDateToFB,
  insertDateToFB,
  selectDatesAction,
} from "../../store/actions/dateItems.action.js";

const DatesScreen = ({ route, navigation, dateList, setDateList, token }) => {
  const [selected, setSelected] = useState("");
  const orientation = useOrientation();
  const [text, setText] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [inputVisible, setInputVisible] = useState(false);
  const [locationVisible, setLocationVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const pendingDates = useSelector((state) => state.dateList.items);
  const [dateLocation, setDateLocation] = useState({});
  const dispatch = useDispatch();
  const dateListMarked = {};
  pendingDates?.forEach(
    (date) =>
      (dateListMarked[date.date] = {
        marked: true,
        selectedColor: theme.colors.secondary,
        selectedDotColor: theme.colors.primary,
      })
  );

  useEffect(() => {
    setDateList(pendingDates || []);
  }, []);

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
      work: text,
      date: selected,
      status: "Pending",
      location: dateLocation,
    };
    if (text !== "") {
      try {
        const insertedDate = await insertDate(text, selected, "Pending", dateLocation);
        newDate.id = insertedDate.insertId;
        console.log("Localización ingresada: ", dateLocation);
        dispatch(insertDateToFB(newDate.id, text, selected, "Pending", dateLocation, token)); // Con redux-toolkit: .unwrap(): Espera que termine.
        dispatch(selectDatesAction());
        setText("");
      } catch (err) {
        console.error("Se ha presentador error intentado eliminar una cita: ", err);
      }
    }
  }

  async function deleteItem(itemToDelete) {
    try {
      await deleteDate(itemToDelete.id);
      dispatch(deleteDateToFB(itemToDelete.id, token));
      dispatch(selectDatesAction());
      setModalVisible(false);
    } catch (err) {
      console.error("Se ha presentado error intendo eliminar una cita: ", err);
    }
  }

  function openDeleteModal(selectedItem) {
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
      />
    );
  };

  function outsidePressHandler() {
    // eslint-disable-next-line no-unused-expressions
    Keyboard.dismiss();
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
            ? styles.calendarContainer
            : styles.calendarContainerLandscape
        }>
        {orientation === ORIENTATION.PORTRAIT ? (
          <Text style={styles.title}>Dates Screen</Text>
        ) : null}
        {selected === "" ? (
          <View
            style={
              orientation === ORIENTATION.PORTRAIT
                ? styles.datesContainer
                : styles.datesContainerLandscape
            }>
            {orientation === ORIENTATION.LANDSCAPE ? (
              <Text
                style={orientation === ORIENTATION.PORTRAIT ? styles.title : styles.titleLandscape}>
                Dates Screen
              </Text>
            ) : null}
            {(!locationVisible && orientation === ORIENTATION.PORTRAIT) ||
            orientation === ORIENTATION.LANDSCAPE ? (
              <ScrollView
                style={
                  orientation === ORIENTATION.PORTRAIT
                    ? styles.scrollViewPortrait
                    : styles.scrollViewLandscape
                }>
                <Calendar
                  onDayPress={(day) => setSelection(day.dateString)}
                  markedDates={{
                    [selected]: {
                      selected: true,
                      // disableTouchEvent: true,
                      selectedColor: theme.colors.secondary,
                      selectedDotColor: theme.colors.primary,
                    },
                    ...dateListMarked,
                  }}
                  style={
                    orientation === ORIENTATION.PORTRAIT
                      ? { ...styles.calendar }
                      : styles.calendarLandscape
                  }
                />
              </ScrollView>
            ) : null}
          </View>
        ) : null}
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
        {dateList.length > 0 && !locationVisible ? (
          <View
            style={
              orientation === ORIENTATION.PORTRAIT
                ? styles.flatListPortrait
                : styles.flatListLandscape
            }>
            <Text
              style={orientation === ORIENTATION.PORTRAIT ? styles.title : styles.titleLandscape}>
              Citas pendientes
            </Text>
            <FlatList
              renderItem={dateToRender}
              data={pendingDates}
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
    </TouchableWithoutFeedback>
  );
};

export default DatesScreen;
