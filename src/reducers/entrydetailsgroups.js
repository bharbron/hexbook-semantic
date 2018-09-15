import {combineReducers} from 'redux'
import {arrayWithPush} from './helpers'
import {ADD_HEX, ADD_HEX_DEFINITION, DELETE_HEX_DEFINITION} from '../actions/hexes'
import {ADD_TABLE_ENTRY} from '../actions/tabledetails'

function byId(state=null, action) {
  console.log(state)
  console.log(action)
  switch (action.type) {
    case ADD_HEX_DEFINITION: return byIdAddHexDefinition(state, action)
    case DELETE_HEX_DEFINITION: return byIdDeleteHexDefinition(state, action)
    case ADD_TABLE_ENTRY: return byIdAddTableEntry(state, action)
    default: return state
  }
}

function allIds(state=null, action) {
  console.log(state)
  console.log(action)
  switch (action.type) {
    case ADD_TABLE_ENTRY: return allIdsAddTableEntry(state, action)
    default: return state
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

function byIdAddTableEntry(state, action) {
  return {
    ...state,
    [action.payload.entryDetailsGroupId]: {
      entryDetails: []
    }
  }
}

function allIdsAddTableEntry(state, action) {
  return arrayWithPush(state, action.payload.entryDetailsGroupId)
}

export default combineReducers({byId: byId, allIds: allIds})