import {combineReducers } from 'redux'
import {ADD_HEX_DEFINITION, DELETE_HEX_DEFINITION, UPDATE_HEX, DELETE_HEX} from '../actions/hexes'
import {UPDATE_TABLE_ENTRY, DELETE_TABLE_ENTRY} from '../actions/tableentries'
import {arrayWithPush, arrayWithItemRemoved} from './helpers'

function byId(state=null, action) {
  console.log(state)
  console.log(action)
  switch (action.type) {
    case ADD_HEX_DEFINITION: return byIdAddHexDefinition(state, action)
    case DELETE_HEX_DEFINITION: return byIdDeleteHexDefinition(state, action)
    case UPDATE_TABLE_ENTRY: return byIdUpdateTableEntry(state, action)
    case DELETE_TABLE_ENTRY: return byIdDeleteTableEntry(state, action)
    case UPDATE_HEX: return byIdUpdateHex(state, action)
    case DELETE_HEX: return byIdDeleteHex(state, action)
    default: return state
  }
}

function allIds(state=null, action) {
  console.log(state)
  console.log(action)
  switch (action.type) {
    case ADD_HEX_DEFINITION: return allIdsAddHexDefinition(state, action)
    case DELETE_HEX_DEFINITION: return allIdsDeleteHexDefinition(state, action)
    case UPDATE_TABLE_ENTRY: return allIdsUpdateTableEntry(state, action)
    case DELETE_TABLE_ENTRY: return allIdsDeleteTableEntry(state, action)
    case UPDATE_HEX: return allIdsUpdateHex(state, action)
    case DELETE_HEX: return allIdsDeleteHex(state, action)
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
    [action.payload.entryDetail.id]: undefined
  })
}

function byIdUpdateTableEntry(state, action) {
  /*
  1. Remove all entryDetails found in prevTableEntry
  2. Add all entryDetails found in tableEntry
  */
  const newState = {
    ...state
  }
  action.payload.prevTableEntry.entryDetails.forEach(
    ed => newState[ed.id] = undefined
  )
  action.payload.tableEntry.entryDetails.forEach(
    ed => newState[ed.id] = {id: ed.id, text: ed.text}
  )
  return newState
}

function byIdDeleteTableEntry(state, action) {
  // Remove all entryDetails found in the tableEntry
  const tableEntry = action.payload.tableEntry
  const newState = {...state}
  tableEntry.entryDetails.forEach(
    ed => newState[ed.id] = undefined
  )
  return newState
}

function byIdUpdateHex(state, action) {
  /*
  1. Remove all entryDetails found in prevHex
  2. Add all entryDetails found in hex
  */
  const newState = {
    ...state
  }
  action.payload.prevHex.entryDetails.forEach(
    ed => newState[ed.id] = undefined
  )
  action.payload.hex.entryDetails.forEach(
    ed => newState[ed.id] = {id: ed.id, text: ed.text}
  )
  return newState
}

function byIdDeleteHex(state, action) {
  // Remove all entryDetails found in hex
  const newState = {...state}
  action.payload.hex.entryDetails.forEach(
    ed => newState[ed.id] = undefined
  )
  return newState
}

function allIdsAddHexDefinition(state, action) {
  return ([...state, action.payload.newEntryDetailId])
}

function allIdsDeleteHexDefinition(state, action) {
  return state.filter(item => item !== action.payload.entryDetail.id)
}

function allIdsUpdateTableEntry(state, action) {
  /*
  1. Remove all entryDetails found in prevTableEntry
  2. Add all entryDetails found in tableEntry
  */
  const prevEntryDetails = action.payload.prevTableEntry.entryDetails
  const entryDetails = action.payload.tableEntry.entryDetails
  let newState = [
    ...state
  ]
  for (let i = 0; i < prevEntryDetails.length; i++) {
    newState = arrayWithItemRemoved(newState, prevEntryDetails[i].id)
  }
  for (let i = 0; i < entryDetails.length; i++) {
    newState = arrayWithPush(newState, entryDetails[i].id)
  }
  return newState
}

function allIdsDeleteTableEntry(state, action) {
  // Remove all entryDetails found in tableEntry
  const tableEntry = action.payload.tableEntry
  let newState = [...state]
  tableEntry.entryDetails.forEach(
    ed => {
      newState = arrayWithItemRemoved(newState, ed.id)
    }
  )
  return newState
}

function allIdsUpdateHex(state, action) {
  /*
  1. Remove all entryDetails found in prevHex
  2. Add all entryDetails found in hex
  */
  const prevEntryDetails = action.payload.prevHex.entryDetails
  const entryDetails = action.payload.hex.entryDetails
  let newState = [
    ...state
  ]
  for (let i = 0; i < prevEntryDetails.length; i++) {
    newState = arrayWithItemRemoved(newState, prevEntryDetails[i].id)
  }
  for (let i = 0; i < entryDetails.length; i++) {
    newState = arrayWithPush(newState, entryDetails[i].id)
  }
  return newState
}

function allIdsDeleteHex(state, action) {
  /*
  1. Remove all entryDetails found in hex
  */
  const entryDetails = action.payload.hex.entryDetails
  let newState = [...state]
  entryDetails.forEach(
    ed => {
      newState = arrayWithItemRemoved(newState, ed.id)
    }
  )
  return newState
}

export default combineReducers({byId: byId, allIds: allIds})
