import { INCREMENT_NUM, DECREMENT_NUM } from "./testConstance";
import { createReducer } from '../../app/common/util/reducersUtil'

const initialState = {
    data: 49
}

const incrementNum = (state, payload) => {
    return {
        ...state,
        data: state.data + 1
    }
}

const decrementNum = (state, payload) => {
    return{
        ...state,
        data: state.data -1
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
    "INCREMENT_NUM": incrementNum,
    "DECREMENT_NUM": decrementNum
})