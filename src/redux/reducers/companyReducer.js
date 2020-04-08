let initialState = {
    all: []
}

let companyReducer = (state = initialState, action) => {
    switch(action.type){
        case "SET_ALL_COMPANIES":
            return {
                ...state,
                all: action.payload
            }
        default:
            return state
    }
}

export default companyReducer