import { NavigationContainer } from "@react-navigation/native";
import { Header } from "../components";

import MainNavigator from "./main";

const Navigator = () => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default Navigator;