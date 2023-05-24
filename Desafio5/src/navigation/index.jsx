import { NavigationContainer } from "@react-navigation/native";

import TabNavigator from "./tabs";

const Navigator = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default Navigator;