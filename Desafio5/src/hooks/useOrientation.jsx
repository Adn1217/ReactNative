import { useState, useEffect } from 'react';
import * as ScreenOrientation from 'expo-screen-orientation';
import { ORIENTATION_NUMBER } from '../constants';

const useOrientation = () => {
    const [screenOrientation, setScreenOrientation] = useState(
        ScreenOrientation.Orientation.PORTRAIT_UP)

    useEffect(() => {
        const onOrientationChange = (currentOrientation) => {
            const orientationValue = currentOrientation.orientationInfo.orientation;
            setScreenOrientation(orientationValue);
        };
        const initScreenOrientation = async () => {
            const currentOrientation = await ScreenOrientation.getOrientationAsync()
        }

        initScreenOrientation();

        const screenOrientationListener = ScreenOrientation.addOrientationChangeListener(onOrientationChange);

        return () => {
            // Se ejecuta al desmontar el componente.
            ScreenOrientation.removeOrientationChangeListener(screenOrientationListener);
        }
    }, [])
        
    return ORIENTATION_NUMBER[screenOrientation]
}

export default useOrientation;