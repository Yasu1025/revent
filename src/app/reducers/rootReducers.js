import {combineReducers } from 'redux'
import { reducer as FormReducer } from 'redux-form'
import eventReducers from '../../features/event/eventReducers'

import testReducers from '../../features/test/testReducers'

const rootReducer = combineReducers({
    events: eventReducers,
    form: FormReducer,
    test: testReducers
})

export default rootReducer