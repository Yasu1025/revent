import { INCREMENT_NUM, DECREMENT_NUM } from './testConstance'


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