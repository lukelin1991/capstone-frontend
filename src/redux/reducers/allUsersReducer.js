let initialState = {
    all: []
}

let allUsersReducer = (state = initialState, action) => {
    switch(action.type){
        case "SET_ALL_USERS":
            return {
                ...state,
                all: action.payload
            }
        default:
            return state
    }
}

export default allUsersReducer