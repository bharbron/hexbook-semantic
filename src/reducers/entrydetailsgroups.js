import { combineReducers } from 'redux'
import { ADD_HEX, ADD_HEX_DETAIL, DELETE_HEX_DETAIL, UPDATE_HEX_COORDINATES } from '../actions/hexes'

function byId(state=null, action) {
  console.log(state)
  console.log(action)
  switch (action.type) {
    case ADD_HEX:
      return byIdAddHex(state, action)

    case ADD_HEX_DETAIL:
      return state

    case DELETE_HEX_DETAIL:
      return state

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
    case ADD_HEX:
      return allIdsAddHex(state, action)

    case ADD_HEX_DETAIL:
      return state

    case DELETE_HEX_DETAIL:
      return state

    case UPDATE_HEX_COORDINATES:
      return allIdsUpdateHexCoordinates(state, action)

    default:
      return state
  }
}

function byIdAddHex(state, action) {
  if (action.payload.replaceEntryDetailsGroupId) {
    return ({
      ...state,
      [action.payload.replaceEntryDetailsGroupId]: undefined
    })
  }
  return state
}

function byIdUpdateHexCoordinates(state, action) {
  if (action.payload.replaceEntryDetailsGroupId) {
    return ({
      ...state,
      [action.payload.replaceEntryDetailsGroupId]: undefined
    })
  }
  return state
}

function allIdsAddHex(state, action) {
  if (action.payload.replaceEntryDetailsGroupId) {
    return ([
      ...state.filter(item => item != action.payload.replaceEntryDetailsGroupId)
    ])
  }
  return state
}

function allIdsUpdateHexCoordinates(state, action) {
  if (action.payload.replaceEntryDetailsGroupId) {
    return ([
      ...state.filter(item => item != action.payload.replaceEntryDetailsGroupId)
    ])
  }
  return state
}

export default combineReducers({byId: byId, allIds: allIds})