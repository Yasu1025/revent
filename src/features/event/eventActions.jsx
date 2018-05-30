import * as C from './eventConstants'
import * as asyncAction from '../async/asyncActions'
import { fetchSampleData } from '../../app/data/mockApi'

export const fetchEvents = (events) => ({
    type: C.FETCH_EVENT,
    payload: events
})

export const createEvent = (event) => ({
    type: C.CREATE_EVENT,
    payload: {
        event
    }
})

export const updateEvent = (event) => ({
    type: C.UPDATE_EVENT,
    payload: {
        event
    }
})

export const deleteEvent = (eventId) => ({
    type: C.DELETE_EVENT,
    payload: {
        eventId
    }
})

export const loadEvents = () => {
    return async (dispatch) => {
        try{
            dispatch(asyncAction.asyncActionStart())
            let events = await fetchSampleData()
            dispatch(fetchEvents(events))
            dispatch(asyncAction.asyncActionFinish())
        }catch(error){
            console.log("[ERROR] FETCHING EVENTS: ", error)
            dispatch(asyncAction.asyncActionError())
        }
    }
}