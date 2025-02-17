
const intialState = {
    balance: 0
}

const balanceReducer = (state = intialState, action) => {

    switch (action.type) {
        case "DEPOSIT": return {
            ...state, balance: state.balance + action.payload
        }

        case "WITHDRAW": return {
            ...state, balance: state.balance - action.payload
        }

        default: {
            return state
        }
    }

}

export default balanceReducer;