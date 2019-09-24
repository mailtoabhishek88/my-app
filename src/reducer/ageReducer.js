const intialState = {
    age: 21,
    history : []
}

const ageReducer = (state = intialState, action) => {
    if(action.type === 'AGE_UP'){
        return {
            ...state,
            age: ++state.age,
            history: state.history.concat({id: Math.random(), age: ++state.age})
        }
    }

    if(action.type === 'AGE_DOWN'){
        return {
            ...state,
            age: --state.age,
            history: state.history.concat({id: Math.random(), age: --state.age})
        }
    }
    if(action.type === "SET_AGE") {
        const tempUser = {...state};

        let filterUsers = tempUser.history.filter( user => {
            return user.id !== action.value
        })

        return {
            ...state,
            history: filterUsers
        }
    }
    //mandatory to return state from reduce for default condition
    //I was getting in intial load when i not used below line.
    //So we need to return intialState for intial load as well otherwise you will get error
    return state;
}


export default ageReducer;