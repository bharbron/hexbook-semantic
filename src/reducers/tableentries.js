import {combineReducers} from 'redux'
import {arrayWithPush, arrayWithInsertAtIndex} from './helpers'
import {ADD_HEX, UPDATE_HEX_TAGS} from '../actions/hexes'
import {ADD_TABLE_ENTRY} from '../actions/tabledetails'

function byId(state=null, action) {
  console.log(state)
  console.log(action)
  switch (action.type) {
    case ADD_HEX: return byIdAddHex(state, action)
    case UPDATE_HEX_TAGS: return byIdUpdateHexTags(state, action)
    case ADD_TABLE_ENTRY: return byIdAddTableEntry(state, action)
    default: return state
  }
}

function allIds(state=null, action) {
  console.log(state)
  console.log(action)
  switch (action.type) {
    case ADD_HEX: return allIdsAddHex(state, action)
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
        addTags: [action.payload.terrain, action.payload.territory],
        removeTags: [],
        entryDetailsGroup: 'HEX',
      }
    })
  }
  return state
}

function byIdUpdateHexTags(state, action) {
  return ({
    ...state,
    [action.payload.coordinates] : {
      ...state[action.payload.coordinates],
      addTags: [action.payload.newTerrain, action.payload.newTerritory],
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
      addTags: [],
      removeTags: [],
      entryDetailsGroup: action.payload.entryDetailsGroupId,
    }
  })
}

function allIdsAddHex(state, action) {
  const coordinates = action.payload.coordinates
  return [...state.filter(item => item != coordinates), coordinates]
}

function allIdsAddTableEntry(state, action) {
  return arrayWithPush(state, action.payload.tableEntryId)
}

export default combineReducers({byId: byId, allIds: allIds})