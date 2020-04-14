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
        case "DELETE_USER":
            return {
                ...state,
                all: state.all.filter(eachUser => eachUser.id !== action.payload)
            }

        default:
            return state
    }
}

export default allUsersReducer