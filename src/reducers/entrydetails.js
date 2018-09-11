import { combineReducers } from 'redux'
import { ADD_HEX, ADD_HEX_DEFINITION, DELETE_HEX_DEFINITION } from '../actions/hexes'

function byId(state=null, action) {
  console.log(state)
  console.log(action)
  switch (action.type) {
    case ADD_HEX_DEFINITION: return byIdAddHexDefinition(state, action)
    case DELETE_HEX_DEFINITION: return byIdDeleteHexDefinition(state, action)
    default: return state
  }
}

function allIds(state=null, action) {
  console.log(state)
  console.log(action)
  switch (action.type) {
    case ADD_HEX_DEFINITION: return allIdsAddHexDefinition(state, action)
    case DELETE_HEX_DEFINITION: return allIdsDeleteHexDefinition(state, action)
    default: return state
  }
}

function byIdAddHexDefinition(state, action) {
  return ({
    ...state,
    [action.payload.newEntryDetailId]: {id: action.payload.newEntryDetailId, text: action.payload.newEntryDetailText}
  })
}

function byIdDeleteHexDefinition(state, action) {
  return ({
    ...state,
    [action.payload.entryDetailId]: undefined
  })
}

function allIdsAddHexDefinition(state, action) {
  return ([...state, action.payload.newEntryDetailId])
}

function allIdsDeleteHexDefinition(state, action) {
  return state.filter(item => item !== action.payload.entryDetailId)
}

export default combineReducers({byId: byId, allIds: allIds})
