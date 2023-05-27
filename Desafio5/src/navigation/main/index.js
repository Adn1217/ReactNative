import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from 'react';
import { theme } from "../../constants";
import { PendingScreen, CompletedScreen, AllScreen, InProgressScreen } from "../../screens";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  const [workList, setWorkList] = useState([{"id": 271.62295550873654, "status": "InProgress", "work": "Tarea 1"}, {"id": 70.39323426678952, "status": "Pending", "work": "Tarea 2"}, {"id": 848.5281256821534, "status": "InProgress", "work": "Tarea 3"}, {"id": 388.1077407655437, "status": "Pending", "work": "Tarea 4"}, {"id": 8.301461077272766, "status": "InProgress", "work": "Tarea 5"}, {"id": 922.4632565308253, "status": "Pending", "work": "Tarea 6"}, {"id": 834.3200648482803, "status": "Pending", "work": "Tarea 7"}, {"id": 470.33373294243677, "status": "Pending", "work": "Tarea 8"}, {"id": 629.4769759374329, "status": "Pending", "work": "Tarea 10"}, {"id": 43.58649486459743, "status": "Pending", "work": "Tarea 11"}, {"id": 254.73943823263372, "status": "Pending", "work": "Tarea 12"}, {"id": 575.0641292129354, "status": "Pending", "work": "Tarea 13"}, {"id": 391.34342041474156, "status": "Pending", "work": "Tarea 14"}]);

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