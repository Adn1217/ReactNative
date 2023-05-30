import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from 'react';
import { theme } from "../../constants";
import { DatesScreen } from "../../screens";

const Stack = createNativeStackNavigator();

const DatesNavigator = ({route, navigation}) => {
  const [dateList, setDateList] = useState([{"date": "2023-05-03", "work": "Odontología", "id": 363.7922203509499, "status": "Pending"}, {"date": "2023-05-02", "work": "Mecánico", "id": 238.89834391514898, "status": "Pending"}, {"date": "2023-05-04", "id": 313.1444692038742, "status": "Pending", "work": "Almuerzo"}]);

  // function updateWorkList(workList){
  //   setWorkList(workList)
  // }

  const DatesScreenComponent = ({route, navigation}) => {
    return (<DatesScreen route={route} navigation={navigation} dateList={dateList} setDateList={setDateList} />)
  }
  
  // const AllScreenComponent = ({route, navigation}) => {
  //   return (<AllScreen workList={workList} setWorkList={updateWorkList} route={route} navigation={navigation} />)
  // }

  return (
    <Stack.Navigator
      initialRouteName="Dates"
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.primary,
        },
        headerTintColor: theme.colors.text,
        headerTitleStyle: {
          fontFamily: "poppinsBold",
        },
      }}>
      <Stack.Screen name="Dates" component={DatesScreenComponent} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default DatesNavigator;