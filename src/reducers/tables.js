import {combineReducers} from 'redux'
import {arrayWithPush, arrayWithUniquePush, arrayWithItemRemoved} from './helpers'
import {ADD_HEX, DELETE_HEX} from '../actions/hexes'
import {ADD_TABLE, DELETE_TABLE, UPDATE_TABLE} from '../actions/tables'
import {ADD_TABLE_ENTRY} from '../actions/tableentries'
import {ADD_TEMPLATE, DELETE_TEMPLATE} from '../actions/templates'

function byId(state=null, action) {
  console.log(state)
  console.log(action)
  switch (action.type) {
    case ADD_HEX: return byIdAddHex(state, action)
    case DELETE_HEX: return byIdDeleteHex(state, action)
    case ADD_TABLE: return byIdAddTable(state, action)
    case DELETE_TABLE: return byIdDeleteTable(state, action)
    case UPDATE_TABLE: return byIdUpdateTable(state, action)
    case ADD_TABLE_ENTRY: return byIdAddTableEntry(state, action)
    case ADD_TEMPLATE: return byIdAddTemplate(state, action)
    case DELETE_TEMPLATE: return byIdDeleteTemplate(state, action)
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
        ...state['HEX'].entries.filter(item => item !== action.payload.coordinates),
        action.payload.coordinates
      ].sort() //keep in coordinate order
    }
  })
}

function byIdDeleteHex(state, action) {
  const hex = action.payload.hex
  return {
    ...state,
    'HEX': {
      ...state['HEX'],
      entries: arrayWithItemRemoved(state, hex.id)
    }
  }
}

function byIdAddTable(state, action) {
  return ({
    ...state,
    [action.payload.id]: {
      id: action.payload.id,
      code: action.payload.code,
      name: action.payload.name,
      description: action.payload.description,
      templates: [],
      entries: [],
    }
  })
}

function byIdDeleteTable(state, action) {
  return ({
    ...state,
    [action.payload.table.id]: undefined
  })
}

function byIdUpdateTable(state, action) {
  return ({
    ...state,
    [action.payload.prevTable.id]: {
      ...state[action.payload.prevTable.id],
      name: action.payload.table.name,
      code: action.payload.table.code,
      description: action.payload.table.description
    }
  })
}

function byIdAddTableEntry(state, action) {
  const tableId = action.payload.tableId
  return ({
    ...state,
    [tableId]: {
      ...state[tableId],
      entries: arrayWithPush(state[tableId].entries, action.payload.tableEntryId)
    }
  })
}

function byIdAddTemplate(state, action) {
  return ({
    ...state,
    [action.payload.table]: {
      ...state[action.payload.table],
      templates: arrayWithUniquePush(state[action.payload.table].templates, action.payload.id)
    }
  })
}

function byIdDeleteTemplate(state, action) {
  // Remove the teplate from the table associate with the template
  const template = action.payload.template
  return {
    ...state,
    [template.table.id]: {
      ...state[template.table.id],
      templates: arrayWithItemRemoved(state[template.table.id].templates, template.id)
    }
  }
}

function allIdsAddTable(state, action) {
  return ([
    ...state,
    action.payload.id
  ])
}

function allIdsDeleteTable(state, action) {
  return ([
    ...state.filter(id => id !== action.payload.table.id)
  ])
}

export default combineReducers({byId: byId, allIds: allIds})
