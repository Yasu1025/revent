import {ASYNC_ACTION_START, ASYNC_ACTION_FINISH, ASYNC_ERROR} from './asyncConstants'
import { createReducer } from '../../app/common/util/reducersUtil'

const initialState = {
    isLoading: false
}


export const asyncStarted = (state) => {
    return {
        ...state,
        isLoading: true
    }
} 

export const asyncFinished = (state) => {
    return {
        ...state,
        isLoading: false
    }
}

export const asyncError = (state) => {
    return {
        ...state,
        isLoading: false
    }
}



export default createReducer(initialState, {
    [ASYNC_ACTION_START]: asyncStarted,
    [ASYNC_ACTION_FINISH]: asyncFinished,
    [ASYNC_ERROR]: asyncError
})