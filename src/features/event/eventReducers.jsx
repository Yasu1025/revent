import { createReducer } from '../../app/common/util/reducersUtil'
import * as C from './eventConstants'


const initialState = []
  

  export const createEvent = (state, payload) => {
      return [...state, Object.assign({}, payload.event)]
  }

  export const updateEvent = (state, payload) => {
    return [
        ...state.filter(event => event.id !== payload.event.id ),
        Object.assign({}, payload.event)
    ]
  }

  export const deleteEvent = (state, payload) =>{
      return [
          ...state.filter(event => event.id !== payload.eventId )
      ]
  }

  export const fetchEvents = (state, payload) => {
    return  payload.events
  }




  

  export default createReducer(initialState, {
      [C.CREATE_EVENT]: createEvent,
      [C.UPDATE_EVENT]: updateEvent,
      [C.DELETE_EVENT]: deleteEvent,
      [C.FETCH_EVENT]: fetchEvents
  })