import { combineReducers } from 'redux'
import { ADD_HEX, ADD_HEX_DEFINITION, DELETE_HEX_DEFINITION, UPDATE_HEX_COORDINATES } from '../actions/hexes'

function byId(state=null, action) {
  console.log(state)
  console.log(action)
  switch (action.type) {
    case ADD_HEX_DEFINITION:
      return byIdAddHexDefinition(state, action)

    case DELETE_HEX_DEFINITION:
      return byIdDeleteHexDefinition(state, action)

    default:
      return state
  }
}

function allIds(state=null, action) {
  console.log(state)
  console.log(action)
  switch (action.type) {
    case ADD_HEX_DEFINITION:
      return state

    case DELETE_HEX_DEFINITION:
      return state

    default:
      return state
  }
}

function byIdAddHexDefinition(state, action) {
  return {
    ...state,
    ['HEX']: {
      ...state['HEX'],
      entryDetails: [...state['HEX'].entryDetails, action.payload.newEntryDetailId]
    }
  }
}

function byIdDeleteHexDefinition(state, action) {
  return {
    ...state,
    ['HEX']: {
      ...state['HEX'],
      entryDetails: [...state['HEX'].entryDetails.filter(item => item != action.payload.entryDetailId)]
    }
  }
}

export default combineReducers({byId: byId, allIds: allIds})