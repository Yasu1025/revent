import { toastr } from 'react-redux-toastr'
import * as C from './eventConstants'
import * as asyncAction from '../async/asyncActions'
import { fetchSampleData } from '../../app/data/mockApi'

export const fetchEvents = (events) => ({
    type: C.FETCH_EVENT,
    payload: events
})

export const createEvent = (event) => {
    // with Toastr
    return async dispatch => {
        try {
            dispatch({
                type: C.CREATE_EVENT,
                payload:{
                    event
                }
            })
            toastr.success("Success!!" ,"New Event Created!!")
        } catch (error) {
            toastr.error("Woops....", "Something is wrong...")
        }
    }
}

export const updateEvent = (event) => {
    return async dispatch => {
        try {
            dispatch({
                type: C.UPDATE_EVENT,
                payload: {
                    event
                }
            })
            toastr.success("Success!!", "Event has been updated!!")
        } catch (error) {
            toastr.error("Woops...", "Update failed...")
        }
    }
}

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