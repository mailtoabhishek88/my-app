const initialState = {
    loadRequired: false
}

const loanReducer = (state = initialState, action) => {

    switch (action.type) {
        case "APPLY": {
            return {
                ...state,
                loanRequired: true
            }
        }
        default: return state
    }
}

export default loanReducer;