import {combineReducers} from 'redux'
import {arrayWithPush} from './helpers'
import {ADD_HEX, UPDATE_HEX} from '../actions/hexes'
import {ADD_TABLE_ENTRY, UPDATE_TABLE_ENTRY} from '../actions/tabledetails'

function byId(state=null, action) {
  console.log(state)
  console.log(action)
  switch (action.type) {
    case ADD_HEX: return byIdAddHex(state, action)
    case UPDATE_HEX: return byIdUpdateHex(state, action)
    case ADD_TABLE_ENTRY: return byIdAddTableEntry(state, action)
    case UPDATE_TABLE_ENTRY: return byIdUpdateTableEntry(state, action)
    default: return state
  }
}

function allIds(state=null, action) {
  console.log(state)
  console.log(action)
  switch (action.type) {
    case ADD_HEX: return allIdsAddHex(state, action)
    case ADD_TABLE_ENTRY: return allIdsAddTableEntry(state, action)
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
  const tableEntryId = action.payload.tableEntryId
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

function allIdsAddHex(state, action) {
  const coordinates = action.payload.coordinates
  return [...state.filter(item => item !== coordinates), coordinates]
}

function allIdsAddTableEntry(state, action) {
  return arrayWithPush(state, action.payload.tableEntryId)
}

export default combineReducers({byId: byId, allIds: allIds})