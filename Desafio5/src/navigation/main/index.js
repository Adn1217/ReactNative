import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from 'react';
import { theme } from "../../constants";
import { PendingScreen, CompletedScreen, AllScreen, InProgressScreen } from "../../screens";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  const [workList, setWorkList] = useState([{"id": 271.62295550873654, "status": "Pending", "work": "Tarea 1"}]);

  function updateWorkList(workList){
    setWorkList(workList)
  }

  const PendingScreenComponent = ({route, navigation}) => {
    return (<PendingScreen workList={workList} setWorkList={updateWorkList} route={route} navigation={navigation} />)
  }
  
  const InProgressScreenComponent = ({route, navigation}) => {
    return (<InProgressScreen workList={workList} setWorkList={updateWorkList} route={route} navigation={navigation}  />)
  }
  
  const CompletedScreenComponent = ({route, navigation}) => {
    return (<CompletedScreen workList={workList} setWorkList={updateWorkList} route={route} navigation={navigation} />)
  }

  const AllScreenComponent = ({route, navigation}) => {
    return (<AllScreen workList={workList} setWorkList={updateWorkList} route={route} navigation={navigation} />)
  }

  return (
    <Stack.Navigator
      initialRouteName="Pending"
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.primary,
        },
        headerTintColor: theme.colors.text,
        headerTitleStyle: {
          fontFamily: "poppinsBold",
        },
      }}>
      <Stack.Screen name="Pending" component={PendingScreenComponent} options={{ headerShown: false }} />
      <Stack.Screen name="InProgress" component={InProgressScreenComponent} options={{ headerShown: false }} />
      <Stack.Screen name="Completed" component={CompletedScreenComponent} options={{headerShown: false}}
      />
      <Stack.Screen name="All" component={AllScreenComponent} options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;