let initialState = {
    username: "",
    email:"",
    token: "",
    id: null,
    applications: [],
    companies: [],
    jobs: []
}

let userReducer = (state = initialState, action) => {
    switch(action.type){
        case "SET_USER_INFO":
            return {
                ...state,
                username: action.payload.user.username,
                email: action.payload.user.email,
                token: action.payload.token,
                id: action.payload.user.id,
                applications: action.payload.user.applications,
                companies: action.payload.user.companies
            }
        case "ADD_APPLICATION":
            let copyOfArray = [...state.applications, action.payload.user.applications]
            return {
                ...state,
                applications: copyOfArray
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