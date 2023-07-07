import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";

import AuthNavigator from "./auth";
import TabNavigator from "./tabs";

const Navigator = () => {
  const userId = useSelector((state) => state.auth.userId);
  // const userId = true;
  return <NavigationContainer>{userId ? <TabNavigator /> : <AuthNavigator />}</NavigationContainer>;
};

export default Navigator;
