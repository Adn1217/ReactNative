
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../assets/styles/styles.js';
import { Input, Modal, Item, Header } from './components/index';
import { PendingScreen, InProgressScreen, CompletedScreen, AllScreen } from './screens/'

export default function App() {

  const [selectedScreen, setSelectedScreen] = useState('Pending');
  const [workList, setWorkList] = useState([]);

  const Content = () => {
    if (selectedScreen === 'Pending'){
      return <PendingScreen workList = {workList} setWorkList={setWorkList}/>;
    }else if (selectedScreen === 'InProgress'){
      return (<InProgressScreen workList = {workList} setWorkList={setWorkList}/>);
    }else if (selectedScreen === 'Completed'){
      return (<CompletedScreen workList = {workList} setWorkList={setWorkList}/>);
    }else{  
      return (<AllScreen workList = {workList} setWorkList={setWorkList}/>);
    }
  }

  return (
    <View style={styles.container}>
     <Header title={"TO DO LIST"} selectScreen = {setSelectedScreen}/>
     <Content />
    </View>
  );
}
