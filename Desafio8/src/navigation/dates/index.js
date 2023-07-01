import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { theme } from "../../constants";
import { DatesScreen } from "../../screens";
import { selectDatesAction } from "../../store/actions/dateItems.action";

const Stack = createNativeStackNavigator();

const DatesNavigator = ({ route, navigation }) => {
  const pendingDates = useSelector((state) => state.dateList.items);
  const [dateList, setDateList] = useState(pendingDates);
  // const dispatch = useDispatch();
  console.log("Lista de citas pendientes: ", dateList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(selectDatesAction());
  }, []);

  const DatesScreenComponent = ({ route, navigation }) => {
    return (
      <DatesScreen
        route={route}
        navigation={navigation}
        dateList={dateList}
        setDateList={setDateList}
      />
    );
  };

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
      <Stack.Screen
        name="Dates"
        component={DatesScreenComponent}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default DatesNavigator;
