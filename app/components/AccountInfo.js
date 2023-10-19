import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    SafeAreaView,
    Platform,
    FlatList,
    TouchableHighlight,
} from "react-native";

const AccountInfo = (props) => {
    return (
        <TouchableHighlight onPress={props.selectAccount}>
            <View style={styles.info}>
                <Text style={styles.text}>Account Name: {props.item.name}</Text>
                <Text style={styles.text}>Account Type: {props.item.type}</Text>
                <Text style={styles.text}>Balance: {props.item.amount} $</Text>
            </View>
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    info: {
        width: "100%",
        backgroundColor: "#e5e5e5",
        marginVertical: 8,
        padding: 10,
        borderRadius: 8,
    },
    text: {
        fontSize: 15,
        marginVertical: 3,
        fontWeight: "500",
    },
});

export default AccountInfo;
