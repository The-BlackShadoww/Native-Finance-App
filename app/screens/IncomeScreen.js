import React, { useEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { getIncome } from "../redux/actionCerator";
import Income from "../components/Income";

const mapStateToProps = (state) => {
    return {
        income: state.income,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getIncome: () => dispatch(getIncome()),
    };
};

const IncomeScreen = (props) => {
    useEffect(() => {
        props.getIncome();
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={props.income}
                renderItem={({ item }) => <Income item={item} />}
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
        flex: 1,
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(IncomeScreen);
