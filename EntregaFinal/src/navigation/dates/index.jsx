import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { theme } from "../../constants";
import { DatesScreen, MapScreen } from "../../screens";
import { selectDatesAction } from "../../store/actions/dateItems.action";

const Stack = createNativeStackNavigator();

const DatesNavigator = ({ route, navigation }) => {
  const [currentDate, setCurrentDate] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const pendingDates = useSelector((state) => state.dateList.items);
  const token = useSelector((state) => state.auth.token);
  const [dateList, setDateList] = useState(pendingDates || []);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(selectDatesAction());
  }, []);

  const MapScreenComponent = ({ route, navigation }) => {
    return <MapScreen route={route} navigation={navigation} />;
  };

  const DatesScreenComponent = ({ route, navigation }) => {
    return (
      <DatesScreen
        route={route}
        navigation={navigation}
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        dateList={dateList}
        setDateList={setDateList}
        token={token}
      />
    );
  };

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
      <Stack.Screen
        name="Map"
        component={MapScreenComponent}
        options={{ title: "Mapa", headerShown: true }}
      />
    </Stack.Navigator>
  );
};

export default DatesNavigator;
