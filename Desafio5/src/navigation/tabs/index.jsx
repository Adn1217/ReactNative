import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainNavigator from '../main';
import DatesNavigator from '../dates';
import { theme } from '../../constants';
import Ionicons from '@expo/vector-icons/Ionicons';

const BottomTab = createBottomTabNavigator();

const TabNavigator = () => {
    return (<BottomTab.Navigator 
        initialRouteName='main'
        screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
            fontFamily: 'poppinsBlack',
            fontSize: 12,
        },
        tabBarStyle: {
            backgroundColor: theme.colors.primary
        },
        tabBarActiveTintColor: theme.colors.text,
        tabBarInactiveTintColor: theme.colors.secondary,
        tabBarIconStyle: {
            fontSize: 22
        }
    }}>
        <BottomTab.Screen name={"main"} component={MainNavigator} 
            options={{tabBarLabel:'Main',
                tabBarIcon: ({focused, color, size}) => (
                <Ionicons name={focused ? "home": "home-outline"} size={size} color={color} />
                )}}
        />
        <BottomTab.Screen name={"dates"} component={DatesNavigator} 
            options={{tabBarLabel:'Dates',
                tabBarIcon: ({focused, color, size}) => (
                <Ionicons name={focused ? "calendar": "calendar-outline"} size={size} color={color} />
                )}}
        />
    </BottomTab.Navigator>)
}

export default TabNavigator;