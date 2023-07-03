import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { theme } from "../../constants";
import { AuthScreen } from "../../screens";

const Stack = createNativeStackNavigator();

const AuthNavigator = ({ route, navigation }) => {
  const AuthScreenComponent = ({ route, navigation }) => {
    return <AuthScreen route={route} navigation={navigation} />;
  };

  return (
    <Stack.Navigator
      initialRouteName="Auth"
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.primary,
        },
        headerTintColor: theme.colors.text,
        headerTitleStyle: {
          fontFamily: "poppinsBold",
        },
      }}>
      <Stack.Screen name="Auth" component={AuthScreenComponent} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
