import { combineReducers } from 'redux'
import { ADD_HEX_DETAIL, DELETE_HEX_DETAIL, ADD_HEX, UPDATE_HEX_COORDINATES } from '../actions/hexes'

function byIdAddHexDetail(state, action) {
  return ({
    ...state,
    'HEX': {
      ...state['HEX'],
      globalEntryDetails: [
        ...state['HEX'].globalEntryDetails,
        action.payload.newEntryDetailId
      ]
    }
  })
}

function byIdDeleteHexDetail(state, action) {
  return ({
    ...state,
    'HEX': {
      ...state['HEX'],
      globalEntryDetails: state['HEX'].globalEntryDetails.filter(item => item != action.payload.entryDetailId)
    }
  })
}

function byIdAddHex(state, action) {
  //For the HEX table, we'll use the hex coordinates as the ID for each table entry, other tables will use uuid4
  //should be safe to assume no collision between the two
  return ({
    ...state,
    'HEX': {
      ...state['HEX'],
      entries: [
        //avoid duplicates
        ...state['HEX'].entries.filter(item => item != action.payload.newCoordinates),
        action.payload.newCoordinates
      ].sort() //always want hexes displayed in coordinate order
    }
  })
}

function byId(state=null, action) {
  console.log(state)
  console.log(action)
  switch (action.type) {
    case ADD_HEX_DETAIL:
      return byIdAddHexDetail(state, action)

    case DELETE_HEX_DETAIL:
      return byIdDeleteHexDetail(state, action)

    case ADD_HEX:
      return byIdAddHex(state, action)

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
  console.log(action)
  switch (action.type) {
    
    default:
      return state
  }
}

export default combineReducers({byId: byId, allIds: allIds})