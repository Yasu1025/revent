import {LOGIN_USER, SIGNOUT_USER} from './authConstants'


export const logIn = (creds) => {
    return {
        type: LOGIN_USER,
        payload: {
            creds
        }
    }
}

export const signOut = () => {
    return {
        type: SIGNOUT_USER
    }
}