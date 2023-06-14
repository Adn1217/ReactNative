import { useState, useEffect } from 'react';
import * as ScreenOrientation from 'expo-screen-orientation';
import { ORIENTATION_NUMBER } from '../constants';

const useOrientation = () => {
    const [screenOrientation, setScreenOrientation] = useState(ScreenOrientation.Orientation.PORTRAIT_UP)
    const [lastOrientation, setLastOrientation] = useState(screenOrientation);

    let initScreenOrientation = async () => {
        const currentOrientation = await ScreenOrientation.getOrientationAsync()
        setLastOrientation(currentOrientation);
    }

    useEffect( () => {
        const onOrientationChange = (currentOrientation) => {
            const orientationValue = currentOrientation.orientationInfo.orientation;
            setScreenOrientation(orientationValue);
            setLastOrientation(orientationValue);
        };

        
        initScreenOrientation();

        const screenOrientationListener = ScreenOrientation.addOrientationChangeListener(onOrientationChange);

        return () => {
            // Se ejecuta al desmontar el componente.
            ScreenOrientation.removeOrientationChangeListener(screenOrientationListener);
        }
    },[])
    
    console.log(`Orientación ${lastOrientation}: ${ORIENTATION_NUMBER[lastOrientation]}`);
    return ORIENTATION_NUMBER[lastOrientation]
}

export default useOrientation;