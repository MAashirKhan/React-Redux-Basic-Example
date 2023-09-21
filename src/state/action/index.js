//It basically dispatch the function to reducer
export const depositFund = (amount) => {
    return (dispatch) => {
        dispatch((
            {
                type: 'DEPOSIT', 
                payload: amount
            }
        ));
    }
}

export const withDrawFund = (amount) => {
    return (dispatch) => {
        dispatch((
            {
                type: 'WITHDRAW', 
                payload: amount
            }
        ));
    }
}