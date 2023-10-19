import React, { useEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { getExpenses } from "../redux/actionCerator";
import Expenses from "../components/Expenses";

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getExpenses: () => dispatch(getExpenses()),
    };
};

const ExpenseScreen = (props) => {
    useEffect(() => {
        props.getExpenses();
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={props.expenses}
                renderItem={({ item }) => <Expenses item={item} />}
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
        marginTop: 10,
        marginBottom: 10,
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseScreen);
