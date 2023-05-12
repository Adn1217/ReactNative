
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, FlatList } from 'react-native';
import { styles } from '../assets/styles/styles.js';
import { Input, Modal, Item, Header } from './components/index';
import { theme } from './components/constants';
import { PendingScreen } from './screens/'

export default function App() {

  const [selectedScreen, setSelectedScreen] = useState('Pending');

  const Content = () => {
    if (selectedScreen === 'Pending'){
      return <PendingScreen />;
    }else{  
      return null ;
    }
  }

  return (
    <View style={styles.container}>
     <Header title={"TO DO LIST"} />
     <Content />
    </View>
  );
}
