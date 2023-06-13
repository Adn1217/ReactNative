import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Provider } from "react-redux";

import { theme } from "../../constants";
import store from "../../store";
import DatesNavigator from "../dates";
import MainNavigator from "../main";

const BottomTab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Provider store={store}>
      <BottomTab.Navigator
        initialRouteName="main"
        screenOptions={{
          headerShown: false,
          tabBarLabelStyle: {
            fontFamily: "poppinsBlack",
            fontSize: 12,
          },
          tabBarStyle: {
            backgroundColor: theme.colors.primary,
          },
          tabBarActiveTintColor: theme.colors.text,
          tabBarInactiveTintColor: theme.colors.secondary,
          tabBarIconStyle: {
            fontSize: 22,
          },
        }}>
        <BottomTab.Screen
          name="main"
          component={MainNavigator}
          options={{
            tabBarLabel: "Main",
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons name={focused ? "home" : "home-outline"} size={size} color={color} />
            ),
          }}
        />
        <BottomTab.Screen
          name="dates"
          component={DatesNavigator}
          options={{
            tabBarLabel: "Dates",
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name={focused ? "calendar" : "calendar-outline"}
                size={size}
                color={color}
              />
            ),
          }}
        />
      </BottomTab.Navigator>
    </Provider>
  );
};

export default TabNavigator;
