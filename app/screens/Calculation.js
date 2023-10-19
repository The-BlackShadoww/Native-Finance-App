import React, { useState } from "react";
import {
    View,
    Text,
    Button,
    FlatList,
    TextInput,
    Platform,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    TouchableHighlight,
} from "react-native";
import IncomeScreen from "./IncomeScreen";
import ExpenseScreen from "./ExpenseScreen";
import { AntDesign } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";
import { Income } from "../redux/actionCerator";
import { Expense } from "../redux/actionCerator";

const mapDispatchToProps = (dispatch) => {
    return {
        Income: (id, amount, name) => dispatch(Income(id, amount, name)),
        Expense: (id, amount, name) => dispatch(Expense(id, amount, name)),
    };
};

const Tab = createBottomTabNavigator();

const Calculation = (props) => {
    const { account } = props.route.params;
    const navigation = useNavigation();

    const [amount, setAmount] = useState(0);

    const onChange = (value) => {
        setAmount(value);
    };

    const calcIncome = () => {
        const id = account.id;
        const name = account.name;
        props.Income(id, amount, name);
        setAmount("");
        navigation.navigate("Home");
    };

    const calcExpense = () => {
        const id = account.id;
        const name = account.name;
        props.Expense(id, amount, name);
        setAmount("");
        navigation.navigate("Home");
    };

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.accInfo}>Account Name: {account.name}</Text>
                <Text style={styles.accInfo}>Balance: {account.amount}$</Text>
                {/* <Text style={styles.accInfo}>id: {account.id}</Text> */}
            </View>
            {/* Calculation */}
            <View>
                <TextInput
                    placeholder="0"
                    keyboardType="numeric"
                    style={styles.input}
                    onChangeText={(value) => onChange(value)}
                />
            </View>
            <View style={styles.view}>
                <View style={styles.Btn}>
                    <Button title="Income" onPress={calcIncome}></Button>
                </View>
                <View style={styles.Btn}>
                    <Button
                        title="expense"
                        onPress={calcExpense}
                        color="red"
                    ></Button>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "93%",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 10,
        marginBottom: 10,
        flex: 1,
        // backgroundColor: "pink",
    },
    accInfo: {
        fontSize: 18,
        marginVertical: 5,
    },
    Btn: {
        width: 180,
    },
    view: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 20,
    },
    input: {
        width: "100%",
        paddingTop: 50,
        paddingHorizontal: 8,
        marginTop: 15,
        marginLeft: "auto",
        marginRight: "auto",
        borderWidth: 2,
        borderColor: "#000",
        borderRadius:6,
        textAlign: "right",
        fontSize: 50,
    },
});

export default connect(null, mapDispatchToProps)(Calculation);
