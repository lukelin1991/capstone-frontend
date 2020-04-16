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
        case "ADD_COMPANY":
            let copyOfArray = [...state.all, action.payload]
            return {
                ...state,
                all: copyOfArray
            }
        default:
            return state
    }
}

export default companyReducer