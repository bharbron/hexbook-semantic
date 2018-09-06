import { combineReducers } from 'redux'
import { ADD_HEX_DETAIL, DELETE_HEX_DETAIL, ADD_HEX, UPDATE_HEX_COORDINATES } from '../actions/hexes'

function byId(state=null, action) {
  console.log(state)
  switch (action.type) {
    case ADD_HEX_DETAIL:
      return ({
        ...state,
        'HEX': {
          ...state['HEX'],
          globalEntryDetails: [
            ...state['HEX'].globalEntryDetails,
            action.payload.entryDetailId
          ]
        }
      })

    case DELETE_HEX_DETAIL:
      return ({
        ...state,
        'HEX': {
          ...state['HEX'],
          globalEntryDetails: state['HEX'].globalEntryDetails.filter(item => item != action.payload.entryDetailId)
        }
      })

    case ADD_HEX:
      //For the HEX table, we'll use the hex coordinates as the ID for each table entry, other tables will use uuid4
      //should be safe to assume no collision between the two
      return ({
        ...state,
        'HEX': {
          ...state['HEX'],
          entries: [
            //avoid duplicates
            ...state['HEX'].entries.filter(item => item != action.payload.coordinates),
            action.payload.coordinates
          ].sort() //always want hexes displayed in coordinate order
        }
      })

    case UPDATE_HEX_COORDINATES:
      return ({
        ...state,
        'HEX': {
          ...state['HEX'],
          entries: [
            ...state['HEX'].entries.filter(item => (item != action.payload.oldCoordinates && item != action.payload.newCoordinates)),
            action.payload.newCoordinates
          ].sort()
        }
      })

    default:
      return state
  }
}

function allIds(state=null, action) {
  console.log(state)
  switch (action.type) {
    
    default:
      return state
  }
}

export default combineReducers({byId: byId, allIds: allIds})