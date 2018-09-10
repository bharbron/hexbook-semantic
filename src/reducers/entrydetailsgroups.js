import { combineReducers } from 'redux'
import { ADD_HEX, ADD_HEX_DEFINITION, DELETE_HEX_DEFINITION, UPDATE_HEX_COORDINATES } from '../actions/hexes'

function byId(state=null, action) {
  console.log(state)
  console.log(action)
  switch (action.type) {
    case ADD_HEX:
      return byIdAddHex(state, action)

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
    case ADD_HEX:
      return allIdsAddHex(state, action)

    case ADD_HEX_DEFINITION:
      return state

    case DELETE_HEX_DEFINITION:
      return state

    default:
      return state
  }
}

function byIdAddHex(state, action) {
  if (action.payload.replaceEntryDetailsGroupId && action.payload.replaceEntryDetailsGroupId != 'HEX') {
    return ({
      ...state,
      [action.payload.replaceEntryDetailsGroupId]: undefined
    })
  }
  return state
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

function allIdsAddHex(state, action) {
  if (action.payload.replaceEntryDetailsGroupId && action.payload.replaceEntryDetailsGroupId != 'HEX') {
    return ([
      ...state.filter(item => item != action.payload.replaceEntryDetailsGroupId)
    ])
  }
  return state
}

export default combineReducers({byId: byId, allIds: allIds})