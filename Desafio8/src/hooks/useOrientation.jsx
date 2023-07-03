import * as ScreenOrientation from "expo-screen-orientation";
import { useState, useEffect } from "react";

import { ORIENTATION_NUMBER } from "../constants";

const useOrientation = () => {
  const [screenOrientation, setScreenOrientation] = useState(
    ScreenOrientation.Orientation.PORTRAIT_UP
  );
  //   const [lastOrientation, setLastOrientation] = useState(screenOrientation);

  const initScreenOrientation = async () => {
    const currentOrientation = await ScreenOrientation.getOrientationAsync();
    // setLastOrientation(currentOrientation);
    setScreenOrientation(currentOrientation);
  };

  useEffect(() => {
    const onOrientationChange = (currentOrientation) => {
      const orientationValue = currentOrientation.orientationInfo.orientation;
      setScreenOrientation(orientationValue);
      //   setLastOrientation(orientationValue);
    };

    initScreenOrientation();

    const screenOrientationListener =
      ScreenOrientation.addOrientationChangeListener(onOrientationChange);

    return () => {
      // Se ejecuta al desmontar el componente.
      ScreenOrientation.removeOrientationChangeListener(screenOrientationListener);
    };
  }, []);

  console.log(`Orientación ${screenOrientation}: ${ORIENTATION_NUMBER[screenOrientation]}`);
  return ORIENTATION_NUMBER[screenOrientation];
};

export default useOrientation;
