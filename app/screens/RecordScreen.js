import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import IncomeScreen from "./IncomeScreen";
import ExpenseScreen from "./ExpenseScreen";

const Tab = createMaterialTopTabNavigator();

const RecordScreen = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarLabelStyle: {
                    fontSize: 18,
                    fontWeight: "500",
                },
                tabBarStyle: { backgroundColor: "#e5e5e5" },
                tabBarActiveTintColor: "#000",
            }}
        >
            <Tab.Screen name="Income" component={IncomeScreen} />
            <Tab.Screen name="Expenses" component={ExpenseScreen} />
        </Tab.Navigator>
    );
};

export default RecordScreen;
