let initialState = {
    username: "",
    email:"",
    token: "",
    id: null,
    applications: [],
    companyusers: {},
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
                companyusers: action.payload.user.companyusers[0],
                companies: action.payload.user.companies[0]
            }
        case "ADD_APPLICATION":
            let applicationArray = [...state.applications, action.payload]
            return {
                ...state,
                applications: applicationArray
            }

        case "ADD_COMPANYUSER":
            let companyuserArray = [...state.companyusers, action.payload]
            return {
                ...state,
                companyusers: companyuserArray
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