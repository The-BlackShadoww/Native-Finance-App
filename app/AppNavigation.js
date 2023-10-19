import React from "react";
import HomeScreen from "./screens/HomeScreen";
import AccountScreen from "./screens/AccountScreen";
import Calculation from "./screens/Calculation";
import RecordScreen from "./screens/RecordScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

const AppNavigation = () => {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="New Account" component={AccountScreen} />
            <Drawer.Screen name="Calculation" component={Calculation} />
            <Drawer.Screen name="Records" component={RecordScreen} />
        </Drawer.Navigator>
    );
};

export default AppNavigation;
