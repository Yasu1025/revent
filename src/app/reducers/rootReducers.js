import {combineReducers } from 'redux'
import { reducer as FormReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'
import eventReducers from '../../features/event/eventReducers'
import modalReducers from '../../features/modals/modalReducers'
import authReducers from '../../features/auth/authReducers'
import asyncReducers from '../../features/async/asyncReducers'

import testReducers from '../../features/test/testReducers'

const rootReducer = combineReducers({
    events: eventReducers,
    test: testReducers,
    modals: modalReducers,
    auth: authReducers,
    async: asyncReducers,
    form: FormReducer,
    toastr: toastrReducer
})

export default rootReducer