import React, { useState } from 'react';
import { Text, View, Button, FlatList } from 'react-native';
import { styles } from './styles.js';
import { Input, Modal, Item, Header } from '../../components/index';
import { theme } from '../../constants/index.js';


  const DatesScreen = ({route, navigation}) => {

    return (
      <View>
        <View style={styles.listContainer}>
          <Header title={"TO DO LIST"} navigation={navigation} route={route}/>
          <Text style={styles.title}>Dates Screen</Text>
        </View>
      </View>
    );
  }

  export default DatesScreen;

