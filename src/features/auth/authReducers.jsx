import { LOGIN_USER, SIGNOUT_USER } from './authConstants'
import { createReducer } from '../../app/common/util/reducersUtil'

const initialState = {
    loggedInUser: {}
}


export const loginUser = (state, payload) => {
    return {
        ...state,
        authenticate: true,
        loggedInUser: payload.creds.email
    }
}

export const signOutUser = (state, payload) => {
    return{
        ...state,
        authenticate: false,
        loggedInUser: {}
    }
}


export default createReducer(initialState, {
    [LOGIN_USER]: loginUser,
    [SIGNOUT_USER]: signOutUser
})