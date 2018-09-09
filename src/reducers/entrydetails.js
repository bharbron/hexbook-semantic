import { combineReducers } from 'redux'
import { ADD_HEX, ADD_HEX_DETAIL, DELETE_HEX_DETAIL } from '../actions/hexes'

function byId(state=null, action) {
  console.log(state)
  console.log(action)
  switch (action.type) {
    case ADD_HEX:
      return byIdAddHex(state, action)

    case ADD_HEX_DETAIL:
      return byIdAddHexDetail(state, action)

    case DELETE_HEX_DETAIL:
      return byIdDeleteHexDetail(state, action)

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
      return allIdsAddHexDetail(state, action)

    case DELETE_HEX_DETAIL:
      return allIdsDeleteHexDetail(state, action)

    default:
      return state
  }
}

function byIdAddHex(state, action) {
  const replaceEntryDetailsIds = action.payload.replaceEntryDetailsIds
  let newState = {...state}
  for (let i = 0; i < replaceEntryDetailsIds.length; i++) {
    newState = {
      ...state,
      [replaceEntryDetailsIds[i]]: undefined
    }
  }
  return newState
}

function byIdAddHexDetail(state, action) {
  return ({
    ...state,
    [action.payload.newEntryDetailId]: {id: action.payload.newEntryDetailId, text: action.payload.newEntryDetailText}
  })
}

function byIdDeleteHexDetail(state, action) {
  return ({
    ...state,
    [action.payload.entryDetailId]: undefined
  })
}

function allIdsAddHex(state, action) {
  const replaceEntryDetailsIds = action.payload.replaceEntryDetailsIds
  return ([
    ...state.filter(item => !replaceEntryDetailsIds.includes(item))
  ])
}

function allIdsAddHexDetail(state, action) {
  return ([
    ...state,
    action.payload.entryDetailId
  ])
}

function allIdsDeleteHexDetail(state, action) {
  return state.filter(item => item !== action.payload.entryDetailId)
}

export default combineReducers({byId: byId, allIds: allIds})
