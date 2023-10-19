import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Expenses = (props) => {
    return (
        <View style={styles.container}>
            <Text>Account: {props.item.accName}</Text>
            <Text style={styles.text}>-{props.item.amount}$</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: "#e5e5e5",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 15,
        borderRadius: 6,
    },
    text: {
        color: "red",
        fontWeight: "800",
    },
});

export default Expenses;
