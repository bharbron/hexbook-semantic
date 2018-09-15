import {combineReducers} from 'redux'
import {arrayWithInsertAtIndex} from './helpers'
import {ADD_HEX} from '../actions/hexes'
import {ADD_TABLE, DELETE_TABLE} from '../actions/tables'
import {ADD_TABLE_ENTRY} from '../actions/tabledetails'

function byId(state=null, action) {
  console.log(state)
  console.log(action)
  switch (action.type) {
    case ADD_HEX: return byIdAddHex(state, action)
    case ADD_TABLE: return byIdAddTable(state, action)
    case DELETE_TABLE: return byIdDeleteTable(state, action)
    case ADD_TABLE_ENTRY: return byIdAddTableEntry(state, action)
    default: return state
  }
}

function allIds(state=null, action) {
  console.log(state)
  console.log(action)
  switch (action.type) {
    case ADD_TABLE: return allIdsAddTable(state, action)
    case DELETE_TABLE: return allIdsDeleteTable(state, action)
    default: return state
  }
}

function byIdAddHex(state, action) {
  //For the HEX table, we'll use the hex coordinates as the ID for each table entry, other tables will use uuid4
  //should be safe to assume no collision between the two
  return ({
    ...state,
    'HEX': {
      ...state['HEX'],
      entries: [
        //avoid duplicates
        ...state['HEX'].entries.filter(item => item != action.payload.coordinates),
        action.payload.coordinates
      ].sort() //keep in coordinate order
    }
  })
}

function byIdAddTable(state, action) {
  return ({
    ...state,
    [action.payload.id]: {
      id: action.payload.id,
      code: action.payload.code,
      name: action.payload.name,
      description: action.payload.description,
      template: undefined,
      entries: [],
    }
  })
}

function byIdDeleteTable(state, action) {
  return ({
    ...state,
    [action.payload.id]: null
  })
}

function byIdAddTableEntry(state, action) {
  const tableId = action.payload.tableId
  return ({
    ...state,
    [tableId]: {
      ...state[tableId],
      entries: arrayWithInsertAtIndex(state[tableId].entries, action.payload.tableEntryId, action.payload.tableEntriesIndex)
    }
  })
}

function allIdsAddTable(state, action) {
  return ([
    ...state,
    action.payload.id
  ])
}

function allIdsDeleteTable(state, action) {
  return ([
    ...state.filter(id => id != action.payload.id)
  ])
}

export default combineReducers({byId: byId, allIds: allIds})
