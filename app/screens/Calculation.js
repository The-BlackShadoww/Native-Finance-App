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
        alert(`${amount}$ is credited to the ${account.name}`);
    };

    const calcExpense = () => {
        const id = account.id;
        const name = account.name;
        props.Expense(id, amount, name);
        setAmount("");
        navigation.navigate("Home");
        alert(`${amount}$ is debited from the ${account.name}`);
    };

    return (
        <View style={styles.container}>
            <View style={styles.accView}>
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
                    value={amount}
                    onChangeText={(value) => onChange(value)}
                />
            </View>
            <View style={styles.view}>
                <View style={styles.Btn}>
                    <Button
                        title="Income"
                        onPress={calcIncome}
                        color="green"
                    ></Button>
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
        marginTop: 15,
        marginBottom: 15,
        flex: 1,
        // backgroundColor: "pink",
    },
    accView: {
        backgroundColor: "#e5e5e5",
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
    },
    accInfo: {
        fontSize: 18,
        fontWeight: "500",
        marginVertical: 5,
    },
    Btn: {
        width: 180,
    },
    view: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 30,
    },
    input: {
        width: "100%",
        paddingTop: 100,
        paddingHorizontal: 8,
        marginTop: 15,
        marginLeft: "auto",
        marginRight: "auto",
        borderWidth: 2,
        borderColor: "#000",
        borderRadius: 15,
        textAlign: "right",
        fontSize: 50,
        backgroundColor: "#e5e5e5",
    },
});

export default connect(null, mapDispatchToProps)(Calculation);
