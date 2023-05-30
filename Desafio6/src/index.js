
import React, { useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../assets/styles/styles.js';
import { useFonts } from 'expo-font';
import { theme } from './constants/theme.js';
import AppNavigator from "./navigation";
import { Provider } from 'react-redux';
import store from './store';

export default function App() {

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

  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </SafeAreaView>
  );
}
