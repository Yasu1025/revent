import {combineReducers } from 'redux'
import testReducer from '../../features/test/testReducers'

const rootReducer = combineReducers({
    test: testReducer
})

export default rootReducer