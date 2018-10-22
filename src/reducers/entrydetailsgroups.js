import {combineReducers} from 'redux'
import {arrayWithPush, arrayWithItemRemoved} from './helpers'
import {ADD_HEX_DEFINITION, DELETE_HEX_DEFINITION, UPDATE_HEX, DELETE_HEX} from '../actions/hexes'
import {ADD_TABLE_ENTRY, UPDATE_TABLE_ENTRY} from '../actions/tabledetails'

function byId(state=null, action) {
  console.log(state)
  console.log(action)
  switch (action.type) {
    case ADD_HEX_DEFINITION: return byIdAddHexDefinition(state, action)
    case DELETE_HEX_DEFINITION: return byIdDeleteHexDefinition(state, action)
    case UPDATE_HEX: return byIdUpdateHex(state, action)
    case DELETE_HEX: return byIdDeleteHex(state, action)
    case ADD_TABLE_ENTRY: return byIdAddTableEntry(state, action)
    case UPDATE_TABLE_ENTRY: return byIdUpdateTableEntry(state, action)
    default: return state
  }
}

function allIds(state=null, action) {
  console.log(state)
  console.log(action)
  switch (action.type) {
    case UPDATE_HEX: return allIdsUpdateHex(state, action)
    case DELETE_HEX: return allIdsDeleteHex(state, action)
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
      entryDetails: [...state['HEX'].entryDetails.filter(item => item !== action.payload.entryDetail.id)]
    }
  }
}

function byIdUpdateHex(state, action) {
  /*
  1. Either add, remove, or update depending on difference in entryDetailsGroup between hex and prevHex
  */
  const entryDetailsGroup = action.payload.hex.entryDetailsGroup
  const prevEntryDetailsGroup = action.payload.prevHex.entryDetailsGroup
  const entryDetails = action.payload.hex.entryDetails
  if (prevEntryDetailsGroup === 'HEX' && entryDetailsGroup === 'HEX') {
    // Still using global hex definition, so nothing to do here
    return state
  }
  if (prevEntryDetailsGroup === 'HEX' && entryDetailsGroup !== 'HEX') {
    // Was previously using global hex definitions, but now overriding those
    // Need to add the new entryDetailsGroup and populate it with the entryDetails
    return {
      ...state,
      [entryDetailsGroup]: {
        id: entryDetailsGroup,
        entryDetails: entryDetails.map(ed => ed.id)
      }
    }
  }
  if (prevEntryDetailsGroup !== 'HEX' && entryDetailsGroup === 'HEX') {
    // Was previously overriding definitions, but have toggled back to using global hex definitions
    // Need to delete the previous entryDetailsGroup
    return {
      ...state,
      [prevEntryDetailsGroup]: undefined
    }
  }
  if (prevEntryDetailsGroup !== 'HEX' && entryDetailsGroup !== 'HEX') {
    // Was previously overriding hex definitions, and still are
    // In theory, prevEntryDetailsGroup and entryDetailsGroup should be equal
    // due to the way we manage toggling on the UI side
    // But to be safe, delete prevEntryDetailsGroup, and add the new entryDetailsGroup and populate it with the entryDetails
    return {
      ...state,
      [prevEntryDetailsGroup]: undefined,
      [entryDetailsGroup]: {
        id: entryDetailsGroup,
        entryDetails: entryDetails.map(ed => ed.id)
      }
    }
  }
  // If for some reason we didn't catch something earlier
  console.log("This shouldn't have happened. Reduction of UPDATE_HEX for entrydetailsgroups wasn't caught.")
  return state
}

function byIdDeleteHex(state, action) {
  /*
  1. Delete the entryDetailsGroup associated with the hex, unless it is group 'HEX'
  */
  // Global 'HEX' definitions, so don't remove anything
  if (action.payload.hex.entryDetailsGroup === 'HEX') {
    return {...state}
  }
  // Hex was not using the global hex group, so delete
  return {
    ...state,
    [action.payload.hex.entryDetailsGroup]: undefined
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

function allIdsUpdateHex(state, action) {
  /*
  1. Either add, remove, or update depending on difference in entryDetailsGroup between hex and prevHex
  */
  const entryDetailsGroup = action.payload.hex.entryDetailsGroup
  const prevEntryDetailsGroup = action.payload.prevHex.entryDetailsGroup
  if (prevEntryDetailsGroup === 'HEX' && entryDetailsGroup === 'HEX') {
    // Still using global hex definition, so nothing to do here
    return state
  }
  if (prevEntryDetailsGroup === 'HEX' && entryDetailsGroup !== 'HEX') {
    // Was previously using global hex definitions, but now overriding those
    // Need to add the new entryDetailsGroup
    return arrayWithPush(state, entryDetailsGroup)
  }
  if (prevEntryDetailsGroup !== 'HEX' && entryDetailsGroup === 'HEX') {
    // Was previously overriding definitions, but have toggled back to using global hex definitions
    // Need to delete the previous entryDetailsGroup
    return arrayWithItemRemoved(state, prevEntryDetailsGroup)
  }
  if (prevEntryDetailsGroup !== 'HEX' && entryDetailsGroup !== 'HEX') {
    // Was previously overriding hex definitions, and still are
    // In theory, prevEntryDetailsGroup and entryDetailsGroup should be equal
    // due to the way we manage toggling on the UI side
    // But to be safe, delete prevEntryDetailsGroup, and add the new entryDetailsGroup
    const newState = arrayWithItemRemoved(state, prevEntryDetailsGroup)
    return arrayWithPush(newState, entryDetailsGroup)
  }
  // If for some reason we didn't catch something earlier
  console.log("This shouldn't have happened. Reduction of UPDATE_HEX for entrydetailsgroups wasn't caught.")
  return state
}

function allIdsDeleteHex(state, action) {
  /*
  If hex was using global 'HEX' definitions group, do nothing. Otherwise, delete the entryDetailsGroup
  */
  if (action.payload.hex.entryDetailsGroup === 'HEX') {
    return [...state]
  }
  else {
    return arrayWithItemRemoved(state, action.payload.hex.entryDetailsGroup)
  }
}

function allIdsAddTableEntry(state, action) {
  return arrayWithPush(state, action.payload.entryDetailsGroupId)
}

export default combineReducers({byId: byId, allIds: allIds})