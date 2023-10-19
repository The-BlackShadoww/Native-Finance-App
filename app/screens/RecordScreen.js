import React from "react";
import {
    View,
    Text,
    Button,
    FlatList,
    Platform,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    TouchableHighlight,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import IncomeScreen from "./IncomeScreen";
import ExpenseScreen from "./ExpenseScreen";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const RecordScreen = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                options={{
                    tabBarIcon: () => (
                        <FontAwesome5
                            name="money-bill-alt"
                            size={24}
                            color="black"
                        />
                    ),
                }}
                name="Income"
                component={IncomeScreen}
            />
            <Tab.Screen
                options={{
                    tabBarIcon: () => (
                        <MaterialIcons
                            name="money-off"
                            size={24}
                            color="black"
                        />
                    ),
                }}
                name="Expenses"
                component={ExpenseScreen}
            />
        </Tab.Navigator>
    );
};

export default RecordScreen;
