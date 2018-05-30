import { INCREMENT_NUM, DECREMENT_NUM, COUNTER_ACTION_START, COUNTER_ACTION_FINISH } from './testConstance'
import { createReducer } from '../../app/common/util/reducersUtil'

const initialState = {
    data: 49,
    loading: false
}

export const incrementNum = (state, payload) => {
    return {
        ...state,
        data: state.data + 1
    }
}

export const decrementNum = (state, payload) => {
    return{
        ...state,
        data: state.data -1
    }
}

export const counterActionStart = (state, payload) => {
    return{
        ...state,
        loading: true
    }
}
export const counterActionFinish = (state, payload) => {
    return{
        ...state,
        loading: false
    }
}

// const testReducer = (state = initialState, action) => {
//     switch(action.type){
//         case "INCREMENT_NUM":
//             return {
//                 ...state,
//                 data: state.data + 1
//             }
//         case "DECREMENT_NUM":
//             return{
//                 ...state,
//                 data: state.data -1
//             }
//         default:
//             return state
//     }
// }

export default createReducer(initialState, {
    [INCREMENT_NUM]: incrementNum,
    [DECREMENT_NUM]: decrementNum,
    [COUNTER_ACTION_START]: counterActionStart,
    [COUNTER_ACTION_FINISH]: counterActionFinish
})