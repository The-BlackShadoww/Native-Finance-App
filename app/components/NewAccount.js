import React, { useState } from "react";
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    Platform,
    Button,
    TextInput,
} from "react-native";
import { connect } from "react-redux";
import { buildAccount } from "../redux/actionCerator";

const mapStateToProps = (state) => {
    return {
        isAccCreated: state.isAccCreated,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        buildAccount: (name, initialValue, type) =>
            dispatch(buildAccount(name, initialValue, type)),
    };
};

const NewAccount = (props) => {
    const [accountState, setAccountState] = useState({
        inputs: {
            name: "",
            initialValue: "",
            type: "",
        },
    });

    const { name, initialValue, type } = accountState.inputs;

    const updateInputs = (value, name) => {
        setAccountState({
            ...accountState,
            inputs: {
                ...accountState.inputs,
                [name]: value,
            },
        });
    };

    const createAccount = () => {
        props.buildAccount(name, initialValue, type);

        setAccountState({
            inputs: {
                name: "",
                initialValue: "",
                type: "",
            },
        });

        if (props.isAccCreated) {
            alert("Account Created");
        } else {
            alert("Failed to create account!!")
        }
    };

    return (
        <View style={styles.container}>
            <View>
                <View>
                    <TextInput
                        style={styles.input}
                        placeholder="Account Name"
                        onChangeText={(value) => updateInputs(value, "name")}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Initial Value"
                        keyboardType="numeric"
                        onChangeText={(value) =>
                            updateInputs(value, "initialValue")
                        }
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Type"
                        onChangeText={(value) => updateInputs(value, "type")}
                    />
                </View>
                <View style={styles.createBtn}>
                    <Button
                        title="Create"
                        color={"green"}
                        onPress={createAccount}
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
    input: {
        width: "100%",
        padding: 8,
        marginTop: 15,
        marginLeft: "auto",
        marginRight: "auto",
        borderBottomWidth: 2,
        borderColor: "#000",
        fontSize:30
    },
    createBtn: {
        width: 150,
        marginTop: 20,
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(NewAccount);
