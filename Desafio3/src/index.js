
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../assets/styles/styles.js';
import { Input, Modal, Item, Header } from './components/index';
import { PendingScreen, InProgressScreen, CompletedScreen, AllScreen } from './screens/'

export default function App() {

  const [selectedScreen, setSelectedScreen] = useState('Pending');

  const Content = () => {
    if (selectedScreen === 'Pending'){
      return <PendingScreen />;
    }else if (selectedScreen === 'InProgress'){
      return (<InProgressScreen />);
    }else if (selectedScreen === 'Completed'){
      return (<CompletedScreen />);
    }else{  
      return (<AllScreen />);
    }
  }

  return (
    <View style={styles.container}>
     <Header title={"TO DO LIST"} selectScreen = {setSelectedScreen}/>
     <Content />
    </View>
  );
}
