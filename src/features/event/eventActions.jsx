import * as C from './eventConstants'

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