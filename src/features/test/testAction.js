import { INCREMENT_NUM, DECREMENT_NUM, COUNTER_ACTION_START, COUNTER_ACTION_FINISH } from './testConstance'


export const incrementNum = () => {
    return{
        type: INCREMENT_NUM,

    }
}


export const decrementNum = () => {
    return{
        type: DECREMENT_NUM,

    }
}

 export const counterActionStart = () => {
    return{
        type: COUNTER_ACTION_START
    }
}

 export const counterActionFinish = () => {
    return{
        type: COUNTER_ACTION_FINISH
    }
}


const delay = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

export const incrementAsync = () => {
    return async dispatch => {
        dispatch(counterActionStart())
        await delay(1000)
        dispatch(incrementNum())
        dispatch(counterActionFinish())
    }
}

export const decremenAsync = () => {
    return async dispatch => {
        dispatch(counterActionStart())
        await delay(1000)
        dispatch(decrementNum())
        dispatch(counterActionFinish())
    }
}
