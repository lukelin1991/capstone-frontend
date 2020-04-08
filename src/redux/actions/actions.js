// function definition to be used, only return an action.

// ACTIONS FOR CURRENT USER --------------------
export const userPostFetch = user => {
    return dispatch => {
        return fetch("http://localhost:3000/users")
    }
}

export const logOut = () => {
    return {
        type: "LOG_OUT"
    }
}

export const setUserInfo = (respFromFetch) => {
    return {
        type: "SET_USER_INFO",
        payload: respFromFetch
    }
}

// ACTIONS FOR ALL USERS ---------------------
export const setAllUsers = (usersArr) => {
    return {
        type: "SET_ALL_USERS",
        payload: usersArr
    }
}

// ACTIONS FOR COMPANIES ---------------------
export const setAllCompanies = (companiesArr) => {
    return {
        type: "SET_ALL_COMPANIES",
        payload: companiesArr
    }
}
// ACTIONS FOR JOBS ----------------------------
export const setAllJobs = (jobsArr) => {
    return {
        type: "SET_ALL_JOBS",
        payload: jobsArr
    }
}