import * as actionTypes from "./actionTypes";
import axios from "axios";

export const newAccount = (acc) => {
    return {
        type: actionTypes.ACCOUNTS,
        payload: acc,
    };
};

export const isAccCreated = (msg) => {
    return {
        type: actionTypes.IS_ACCOUNT_CREATED,
        payload: msg,
    };
};

export const buildAccount = (name, initialValue, type) => (dispatch) => {
    const acc = {
        name: name,
        initialValue: initialValue,
        type: type,
    };

    axios
        .post(
            "https://bohubrihifinanceapp-default-rtdb.firebaseio.com/accounts.json",
            acc
        )
        .then((response) => {
            dispatch(isAccCreated(true));
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
};

export const getAccounts = () => (dispatch) => {
    axios
        .get(
            "https://bohubrihifinanceapp-default-rtdb.firebaseio.com/accounts.json"
        )
        .then((response) => {
            const data = response.data;
            const formattedData = Object.keys(data).map((id) => ({
                id,
                name: data[id].name,
                amount: data[id].initialValue,
                type: data[id].type,
            }));

            dispatch(newAccount(formattedData));
        })
        .catch((error) => console.log(error));
};

export const updatedAcc = (value) => {
    return {
        type: actionTypes.CALCULATION,
        payload: value,
    };
};

export const Income = (id, amount, name) => (dispatch) => {
    const income = {
        accId: id,
        accName: name,
        income: amount,
    };
    const accountUrl = `https://bohubrihifinanceapp-default-rtdb.firebaseio.com/accounts/${id}.json`;

    axios
        .get(accountUrl)
        .then((response) => {
            const currentAccount = response.data;

            currentAccount.initialValue =
                parseFloat(currentAccount.initialValue) + parseFloat(amount);

            axios
                .put(accountUrl, currentAccount)
                .then((response) => {
                    dispatch(updatedAcc(response.data));
                    console.log(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        })
        .catch((error) => {
            console.log(error);
        });

    axios
        .post(
            "https://bohubrihifinanceapp-default-rtdb.firebaseio.com/income.json",
            income
        )
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
};

export const incomeList = (income) => {
    return {
        type: actionTypes.INCOME,
        payload: income,
    };
};

export const getIncome = () => (dispatch) => {
    axios
        .get(
            "https://bohubrihifinanceapp-default-rtdb.firebaseio.com/income.json"
        )
        .then((response) => {
            const data = response.data;
            const formattedData = Object.keys(data).map((id) => ({
                id,
                accId: data[id].accId,
                income: data[id].income,
                accName: data[id].accName,
            }));

            dispatch(incomeList(formattedData));
            console.log(response.data);
        })
        .catch((error) => console.log(error));
};

export const Expense = (id, amount, name) => (dispatch) => {
    const exp = {
        accId: id,
        amount: amount,
        accName: name,
    };

    const accountUrl = `https://bohubrihifinanceapp-default-rtdb.firebaseio.com/accounts/${id}.json`;

    axios
        .get(accountUrl)
        .then((response) => {
            const currentAccount = response.data;

            currentAccount.initialValue =
                parseFloat(currentAccount.initialValue) - parseFloat(amount);

            axios
                .put(accountUrl, currentAccount)
                .then((response) => {
                    // dispatch(expenseList(amount, name));
                    dispatch(updatedAcc(response.data));
                    console.log(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        })
        .catch((error) => {
            console.log(error);
        });

    axios
        .post(
            "https://bohubrihifinanceapp-default-rtdb.firebaseio.com/expenses.json",
            exp
        )
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
};

export const expenseList = (expense) => {
    return {
        type: actionTypes.EXPENSES,
        payload: expense,
    };
};

export const getExpenses = () => (dispatch) => {
    axios
        .get(
            "https://bohubrihifinanceapp-default-rtdb.firebaseio.com/expenses.json"
        )
        .then((response) => {
            const data = response.data;
            const formattedData = Object.keys(data).map((id) => ({
                id,
                accId: data[id].accId,
                amount: data[id].amount,
                accName: data[id].accName,
            }));

            dispatch(expenseList(formattedData));
            console.log(response.data);
        })
        .catch((error) => console.log(error));
};
