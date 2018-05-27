import {combineReducers } from 'redux'
import eventReducers from '../../features/event/eventReducers'

const rootReducer = combineReducers({
    events: eventReducers
})

export default rootReducer