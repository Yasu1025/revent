import {combineReducers } from 'redux'
import { reducer as FormReducer } from 'redux-form'
import eventReducers from '../../features/event/eventReducers'

const rootReducer = combineReducers({
    events: eventReducers,
    form: FormReducer
})

export default rootReducer