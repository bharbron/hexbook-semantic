import { combineReducers } from 'redux'
import { ADD_HEX, UPDATE_HEX_COORDINATES } from '../actions/hexes'

function byId(state=null, action) {
  console.log(state)
  console.log(action)
  switch (action.type) {
    case ADD_HEX:
      return byIdAddHex(state, action)

    case UPDATE_HEX_COORDINATES:
      return byIdUpdateHexCoordinates(state, action)

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

function byIdUpdateHexCoordinates(state, action) {
  const newCoordinates = action.payload.newCoordinates
  const oldHex = action.payload.oldHex
  const oldHexCoordinates = (oldHex) ? oldHex.id : undefined
  return ({
    ...state,
    'HEX': {
      ...state['HEX'],
      entries: [
        ...state['HEX'].entries.filter(item => (item != oldHexCoordinates && item != newCoordinates)),
        newCoordinates
      ].sort() //always want hexes displayed in coordinate order
    }
  })
}

export default combineReducers({byId: byId, allIds: allIds})