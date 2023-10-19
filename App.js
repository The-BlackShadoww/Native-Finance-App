import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppNavigation from "./app/AppNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "./app/redux/store";

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <AppNavigation />
            </NavigationContainer>
        </Provider>
    );
}
