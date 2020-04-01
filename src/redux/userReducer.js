let initialState = {
    username: "",
    companyusers: [],
    applications: [],
    token: ""
}

let userReducer = (state = initialState, action) => {
    switch(action.type){
        case "SET_USER_INFO":
            return {
                ...state,
                username: action.payload,
                companyusers: action.payload,
                applications: action.payload,
                token: action.payload.token
            }
        
        case "LOG_OUT":
            return {
                ...state,
                ...initialState
            }

        default:
            return state
    }
}

export default userReducer