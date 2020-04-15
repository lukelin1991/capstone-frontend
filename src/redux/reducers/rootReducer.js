import { combineReducers } from 'redux'
import jobReducer from './jobReducer'
import userReducer from './userReducer'
import companyReducer from './companyReducer'
import allUsersReducer from './allUsersReducer'

export default combineReducers({
    jobs: jobReducer,
    user: userReducer,
    companies: companyReducer,
    users: allUsersReducer
})