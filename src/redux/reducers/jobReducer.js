let initialState = {
    all: []
}

let jobReducer = (state = initialState, action) => {
    switch(action.type){
        case "SET_ALL_JOBS":
            return {
                ...state,
                all: action.payload
            }
        default:
            return state
    }
}

export default jobReducer