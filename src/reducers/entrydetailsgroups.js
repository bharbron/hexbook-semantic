import {combineReducers} from 'redux'
import {arrayWithPush} from './helpers'
import {ADD_HEX_DEFINITION, DELETE_HEX_DEFINITION} from '../actions/hexes'
import {ADD_TABLE_ENTRY, UPDATE_TABLE_ENTRY} from '../actions/tabledetails'

function byId(state=null, action) {
  console.log(state)
  console.log(action)
  switch (action.type) {
    case ADD_HEX_DEFINITION: return byIdAddHexDefinition(state, action)
    case DELETE_HEX_DEFINITION: return byIdDeleteHexDefinition(state, action)
    case ADD_TABLE_ENTRY: return byIdAddTableEntry(state, action)
    case UPDATE_TABLE_ENTRY: return byIdUpdateTableEntry(state, action)
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
    'HEX': {
      ...state['HEX'],
      entryDetails: [...state['HEX'].entryDetails, action.payload.newEntryDetailId]
    }
  }
}

function byIdDeleteHexDefinition(state, action) {
  return {
    ...state,
    'HEX': {
      ...state['HEX'],
      entryDetails: [...state['HEX'].entryDetails.filter(item => item !== action.payload.entryDetailId)]
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

function byIdUpdateTableEntry(state, action) {
  /*
  1. Remove all entryDetails found in the entryDetailsGroup of prevTableEntry
  2. Add all entryDetails found in the entryDetailsGroup of tableEntry
  */
  const prevEntryDetailsGroupId = action.payload.prevTableEntry.entryDetailsGroup
  const prevEntryDetailIds = []
  action.payload.prevTableEntry.entryDetails.map(
    ed => prevEntryDetailIds.push(ed.id)
  )
  const entryDetailsGroupId = action.payload.tableEntry.entryDetailsGroup
  const entryDetailIds = []
  action.payload.tableEntry.entryDetails.map(
    ed => entryDetailIds.push(ed.id)
  )
  //Remove prev
  let newState = {
    ...state,
    [prevEntryDetailsGroupId]: {
      ...state[prevEntryDetailsGroupId],
      entryDetails: [...state[prevEntryDetailsGroupId].entryDetails.filter(id => (!prevEntryDetailIds.includes(id)))]
    }
  }
  //Add new
  newState = {
    ...newState,
    [entryDetailsGroupId]: {
      ...newState[entryDetailsGroupId],
      entryDetails: [...newState[entryDetailsGroupId].entryDetails, ...entryDetailIds]
    }
  }
  return newState
}

function allIdsAddTableEntry(state, action) {
  return arrayWithPush(state, action.payload.entryDetailsGroupId)
}

export default combineReducers({byId: byId, allIds: allIds})