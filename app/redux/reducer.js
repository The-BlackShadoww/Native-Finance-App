import * as actionTypes from "./actionTypes";

const INITIAL_STATE = {
    accounts: [],
    expenses: [],
    income: [],
    isAccCreated: false,
};

export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ACCOUNTS:
            return {
                ...state,
                accounts: action.payload,
            };
        case actionTypes.IS_ACCOUNT_CREATED:
            return {
                ...state,
                isAccCreated: action.payload,
            };
        case actionTypes.CALCULATION:
            const value = action.payload;
            const accountIndex = state.accounts.findIndex(
                (account) => account.name === value.name
            );
            if (accountIndex !== -1) {
                const updatedAccount = {
                    ...state.accounts[accountIndex],
                    amount: value.initialValue,
                };
                const updatedAccounts = [...state.accounts];
                updatedAccounts[accountIndex] = updatedAccount;
                return {
                    ...state,
                    accounts: updatedAccounts,
                };
            }
        case actionTypes.EXPENSES:
            return {
                ...state,
                expenses: action.payload,
            };
        case actionTypes.INCOME:
            return {
                ...state,
                income: action.payload,
            };
        default:
            return state;
    }
};
