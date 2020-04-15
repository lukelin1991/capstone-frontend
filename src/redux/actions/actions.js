// function definition to be used, only return an action.

// ACTIONS FOR CURRENT USER --------------------
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

export const addApplication = (userAppObj) => {
    let actionObj = {
        type: "ADD_APPLICATION",
        payload: userAppObj
    }
    return actionObj
}

// ACTIONS FOR ALL USERS ---------------------
export const setAllUsers = (usersArr) => {
    return {
        type: "SET_ALL_USERS",
        payload: usersArr
    }
}

export const deleteUser = (user) => {
    let actionObj = {
        type: "DELETE_USER",
        payload: user.id
    }
    return actionObj
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

export const addJob = (jobObj) => {
   let actionObj = {
       type: "ADD_JOB",
       payload: jobObj
   }
   return actionObj
}