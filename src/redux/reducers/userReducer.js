let initialState = {
    username: "",
    email:"",
    token: ""
}

let userReducer = (state = initialState, action) => {
    switch(action.type){
        case "SET_USER_INFO":
            return {
                ...state,
                username: action.payload.user.username,
                email: action.payload.user.email,
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