import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from 'react';
import { theme } from "../../constants";
import { DatesScreen } from "../../screens";
import { useSelector } from "react-redux";

const Stack = createNativeStackNavigator();

const DatesNavigator = ({route, navigation}) => {
  const pendingDate = useSelector((state) => state.dateList.items);
  const [dateList, setDateList] = useState(pendingDate);

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