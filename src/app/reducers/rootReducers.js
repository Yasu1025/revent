import {combineReducers } from 'redux'
import { reducer as FormReducer } from 'redux-form'
import eventReducers from '../../features/event/eventReducers'
import modalReducers from '../../features/modals/modalReducers'
import authReducers from '../../features/auth/authReducers'

import testReducers from '../../features/test/testReducers'

const rootReducer = combineReducers({
    events: eventReducers,
    form: FormReducer,
    test: testReducers,
    modals: modalReducers,
    auth: authReducers
})

export default rootReducer