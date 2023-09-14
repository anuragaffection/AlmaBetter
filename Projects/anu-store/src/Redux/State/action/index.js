export const withdraw = (amount) => {
    return {
        type: 'Withdraw',
        payload: amount
    }
}

export const deposit = (amount) => {
    return {
        type: 'Deposit',
        payload: amount
    }
}