import React, { useEffect } from "react";
import {
    View,
    Text,
    Button,
    FlatList,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    TouchableHighlight,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";
import { getAccounts } from "../redux/actionCerator";
import AccountInfo from "../components/AccountInfo";

const mapStateToProps = (state) => {
    return {
        accounts: state.accounts,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAccounts: () => dispatch(getAccounts()),
    };
};

const HomeScreen = (props) => {
    useEffect(() => {
        props.getAccounts();
    });

    const navigation = useNavigation();

    const addAccount = () => {
        navigation.navigate("New Account");
    };

    const seeRecords = () => {
        navigation.navigate("Records");
    };

    return (
        <View style={styles.container}>
            <View style={styles.btnView}>
                <View style={styles.width}>
                    <Button
                        color="green"
                        title="Add New Account"
                        onPress={addAccount}
                    ></Button>
                </View>
                <View style={styles.width}>
                    <Button title="Records" onPress={seeRecords}></Button>
                </View>
            </View>
            <View style={styles.expContainer}>
                <Text style={styles.Text}>List of Accounts</Text>
            </View>
            <FlatList
                data={props.accounts}
                renderItem={({ item }) => (
                    <AccountInfo
                        item={item}
                        selectAccount={() =>
                            props.navigation.navigate("Calculation", {
                                account: item,
                            })
                        }
                    />
                )}
                keyExtractor={(item) => item.id.toString()}
            />
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
    btnView: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        // backgroundColor: "pink",
    },
    width: {
        width: 150,
    },
    btn: {
        color: "red",
    },
    expContainer: {
        marginTop: 15,
    },
    Text: {
        fontSize: 25,
        fontWeight: '500',
        marginVertical:5
    },
    addView: {
        width: 70,
        height: 70,
        borderRadius: 100,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red",
    },
    subView: {
        width: 70,
        height: 70,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100,
        backgroundColor: "red",
        marginVertical: 5,
    },
    bottomRightView: {
        position: "absolute",
        right: 10,
        bottom: 15,
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
