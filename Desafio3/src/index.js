
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../assets/styles/styles.js';
import { Input, Modal, Item, Header } from './components/index';
import { PendingScreen, InProgressScreen, CompletedScreen, AllScreen } from './screens/'

export default function App() {

  const [selectedScreen, setSelectedScreen] = useState('Pending');
  const [workList, setWorkList] = useState([{"id": 271.62295550873654, "status": "Pending", "work": "Tarea 1"}]);

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
