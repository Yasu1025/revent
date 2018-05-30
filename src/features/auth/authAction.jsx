import {LOGIN_USER, SIGNOUT_USER} from './authConstants'
import { modalClose } from '../modals/modalActions'


export const logIn = (creds) => {
    return (dispatch) => {
        dispatch({type: LOGIN_USER, payload: {creds}})
        
        dispatch(modalClose())
    }
}

export const signOut = () => {
    return {
        type: SIGNOUT_USER
    }
}