import React, { useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { styles } from './styles.js';
import { Input, Header } from '../../components/index';
import { theme, ORIENTATION } from '../../constants/index.js';
import { Calendar } from 'react-native-calendars';
import useOrientation from '../../hooks/useOrientation.jsx';

  const DatesScreen = ({route, navigation}) => {
    const [selected, setSelected] = useState('');
    const [dateList, setDateList] = useState([]);
    const orientation = useOrientation();
    const [text, setText] = React.useState('');
    const [inputVisible, setInputVisible] = useState(false);

    function setSelection(day) {
      setInputVisible(true);
      setSelected(day);
      console.log('Selected day: ', day);
    }
    
    function setThisDate(text) {
      setText(text);
    }

    function addDate(){
      if (text !== ''){
        let newList = [...dateList, {
          id: Math.random()*1000, 
          work: text, 
          status: 'Pending'}]
        console.log('Nueva lista de citas: ', newList);
        setDateList(newList)
        setText('');
      }
    }

    const InputComponent = () => {
      if (inputVisible){
        return (
          <Input title={"Nueva cita"}
                    description={"Planifique sus citas"}
                    placeholder = {"Ingrese nueva cita"}
                    value={text}
                    buttonTitle={"Agregar"} 
                    inputHandler={setThisDate}
                    pressHandler={addDate}
                    />)
      } else {
        return null    
      }
    }
    return (
      <View style={orientation === ORIENTATION.PORTRAIT ? styles.screenContainer : styles.screenContainerLandscape}>
        <Header title={"TO DO LIST"} navigation={navigation} route={route}/>
        <View style={orientation === ORIENTATION.PORTRAIT ? styles.calendarContainer : styles.calendarContainerLandscape}>
          <View style={orientation === ORIENTATION.PORTRAIT ? styles.datesContainer : styles.datesContainerLandscape}>
            <Text style={orientation === ORIENTATION.PORTRAIT ? styles.title : styles.titleLandscape}>Dates Screen</Text>
            <ScrollView style={orientation === ORIENTATION.PORTRAIT ? null : styles.scrollViewLandscape}>
              <Calendar onDayPress={day => setSelection(day.dateString)}
              markedDates={{
                [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
              }}
              style={orientation === ORIENTATION.PORTRAIT ? styles.calendar : styles.calendarLandscape}/> 
            </ScrollView>
          </View>
          <View style={orientation === ORIENTATION.PORTRAIT ? styles.inputComponent : styles.inputComponentLandscape}>
            <InputComponent />
          </View>
        </View>
      </View>
    );
  }

  export default DatesScreen;

