import {combineReducers} from 'redux'
import {arrayWithPush, arrayWithUniquePush, arrayWithItemRemoved} from './helpers'
import {ADD_HEX, UPDATE_HEX, DELETE_HEX} from '../actions/hexes'
import {DELETE_OTHER_TAG} from '../actions/tags'
import {ADD_TABLE_ENTRY, UPDATE_TABLE_ENTRY, DELETE_TABLE_ENTRY} from '../actions/tableentries'
import {DELETE_TABLE} from '../actions/tables'

function byId(state=null, action) {
  console.log(state)
  console.log(action)
  switch (action.type) {
    case ADD_HEX: return byIdAddHex(state, action)
    case UPDATE_HEX: return byIdUpdateHex(state, action)
    case DELETE_HEX: return byIdDeleteHex(state, action)
    case DELETE_OTHER_TAG: return byIdDeleteOtherTag(state, action)
    case ADD_TABLE_ENTRY: return byIdAddTableEntry(state, action)
    case UPDATE_TABLE_ENTRY: return byIdUpdateTableEntry(state, action)
    case DELETE_TABLE_ENTRY: return byIdDeleteTableEntry(state, action)
    case DELETE_TABLE: return byIdDeleteTable(state, action)
    default: return state
  }
}

function allIds(state=null, action) {
  console.log(state)
  console.log(action)
  switch (action.type) {
    case ADD_HEX: return allIdsAddHex(state, action)
    case DELETE_HEX: return allIdsDeleteHex(state, action)
    case ADD_TABLE_ENTRY: return allIdsAddTableEntry(state, action)
    case DELETE_TABLE_ENTRY: return allIdsDeleteTableEntry(state, action)
    case DELETE_TABLE: return allIdsDeleteTable(state, action)
    default: return state
  }
}

function byIdAddHex(state, action) {
  // Don't overwrite -- if a hex already exists at these coordinates, don't add anything
  if (!state[action.payload.coordinates]) {
    return ({
      ...state,
      [action.payload.coordinates] : {
        id: action.payload.coordinates,
        weight: 1,
        text: action.payload.coordinates,
        entryDetailsGroup: 'HEX',
        addTags: [action.payload.terrain, action.payload.territory],
        tagWeights: [],
        tagBlacklist: [],
        limit: null,
      }
    })
  }
  return state
}

function byIdUpdateHex(state, action) {
  /*
  Update the things that we allow changes to: terrain/territory tags and entryDetailsGroup (hex definition override)
  */
  const hex = action.payload.hex
  return ({
    ...state,
    [hex.id]: {
      ...state[hex.id],
      entryDetailsGroup: hex.entryDetailsGroup,
      addTags: hex.addTags,
    }
  })
}

function byIdDeleteHex(state, action) {
  /*
  Remove the hex
  */
  const hex = action.payload.hex
  return {
    ...state,
    [hex.id]: undefined
  }
}

function byIdDeleteOtherTag(state, action) {
  /*
  Remove tag from tagBlacklist of all tableEntries
  */
  const tag = action.payload.tag
  const newState = {...state}
  Object.values(newState).forEach(
    te => {
      newState[te.id].addTags = arrayWithItemRemoved(newState[te.id].addTags, tag)
      newState[te.id].tagBlacklist = arrayWithItemRemoved(newState[te.id].tagBlacklist, tag)
    }
  )
  return newState
}

function byIdAddTableEntry(state, action) {
  const tableEntryId = action.payload.tableEntryId
  return ({
    ...state,
    [tableEntryId]: {
      id: tableEntryId,
      weight: action.payload.weight,
      text: action.payload.text,
      entryDetailsGroup: action.payload.entryDetailsGroupId,
      addTags: [],
      tagWeights: [],
      tagBlacklist: [],
      limit: null,
    }
  })
}

function byIdUpdateTableEntry(state, action) {
  /*
  1. id = unchanged
  2. weight = update
  3. text = update
  4. entryDetailsGroup = unchanged
  5. addTags = update
  6. tagWeights = update
  7. tagBlacklist = update
  8. limit = update
  */
  const tagWeights = []
  action.payload.tableEntry.tagWeights.map(
    tw => tagWeights.push(tw.id)
  )
  const tableEntryId = action.payload.prevTableEntry.id
  const newState = {
    ...state,
    [tableEntryId]: {
      ...state[tableEntryId],
      weight: action.payload.tableEntry.weight,
      text: action.payload.tableEntry.text,
      addTags: action.payload.tableEntry.addTags,
      'tagWeights': tagWeights,
      tagBlacklist: action.payload.tableEntry.tagBlacklist,
      limit: action.payload.tableEntry.limit
    }
  }
  return newState
}

function byIdDeleteTableEntry(state, action) {
  // Remove the tableEntry
  const tableEntry = action.payload.tableEntry
  return {
    ...state,
    [tableEntry.id]: undefined
  }
}

function byIdDeleteTable(state, action) {
  // Remove all tableEntries in table
  const table = action.payload.table
  const newState = {...state}
  table.tableEntries.forEach(
    te => {
      newState[te.id] = undefined
    }
  )
  return newState
}

function allIdsAddHex(state, action) {
  const coordinates = action.payload.coordinates
  return arrayWithUniquePush(state, coordinates)
}

function allIdsDeleteHex(state, action) {
  const hex = action.payload.hex
  return arrayWithItemRemoved(state, hex.id)
}

function allIdsAddTableEntry(state, action) {
  return arrayWithPush(state, action.payload.tableEntryId)
}

function allIdsDeleteTableEntry(state, action) {
  return arrayWithItemRemoved(state, action.payload.tableEntry.id)
}

function allIdsDeleteTable(state, action) {
  // Remove all tableEntries in table
  const table = action.payload.table
  let newState = [...state]
  table.tableEntries.forEach(
    te => {
      newState = arrayWithItemRemoved(newState, te.id)
    }
  )
  return newState
}

export default combineReducers({byId: byId, allIds: allIds})