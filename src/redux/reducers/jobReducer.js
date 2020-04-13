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

        case "ADD_JOB":
            let copyOfArray = [...state.all, action.payload]
            return {
                ...state,
                all: copyOfArray
            }
            
        default:
            return state
    }
}

export default jobReducer