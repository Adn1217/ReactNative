
import React, { useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { styles } from '../assets/styles/styles.js';
import { Header } from './components/index';
import { PendingScreen, InProgressScreen, CompletedScreen, AllScreen } from './screens/'
import { useFonts } from 'expo-font';
import { theme } from './components/constants/theme.js';
export default function App() {

  const [selectedScreen, setSelectedScreen] = useState('Pending');
  const [workList, setWorkList] = useState([{"id": 271.62295550873654, "status": "Pending", "work": "Tarea 1"}]);
  const [loadedFonts] = useFonts({
    'poppinsBlack': require('../assets/fonts/Poppins/Poppins-Black.ttf'),
    'poppinsBlackItalic': require('../assets/fonts/Poppins/Poppins-BlackItalic.ttf'),
    'poppinsBold': require('../assets/fonts/Poppins/Poppins-Bold.ttf'),
    'poppinsBoldItalic': require('../assets/fonts/Poppins/Poppins-BoldItalic.ttf'),
    'poppinsItalic': require('../assets/fonts/Poppins/Poppins-Italic.ttf'),
    'poppins': require('../assets/fonts/Poppins/Poppins-Regular.ttf'),
  })

  if(!loadedFonts){
    return (<View style={styles.loaderContainer}>
            <ActivityIndicator size='large' color={theme.colors.primary}/>
          </View>)}

  function selectScreen(selection){
    setSelectedScreen(selection)
  }

  function updateWorkList(workList){
    setWorkList(workList)
  }

  const Content = () => {
    if (selectedScreen === 'Pending'){
      return <PendingScreen workList = {workList} setWorkList={updateWorkList}/>;
    }else if (selectedScreen === 'InProgress'){
      return (<InProgressScreen workList = {workList} setWorkList={updateWorkList}/>);
    }else if (selectedScreen === 'Completed'){
      return (<CompletedScreen workList = {workList} setWorkList={updateWorkList}/>);
    }else{  
      return (<AllScreen workList = {workList} setWorkList={updateWorkList}/>);
    }
  }

  return (
    <View style={styles.container}>
     <Header title={"TO DO LIST"} selectScreen = {selectScreen}/>
     <Content />
    </View>
  );
}
