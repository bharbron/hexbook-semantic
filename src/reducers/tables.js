import {combineReducers} from 'redux'
import {ADD_HEX} from '../actions/hexes'
import {ADD_TABLE, DELETE_TABLE} from '../actions/tables'

function byId(state=null, action) {
  console.log(state)
  console.log(action)
  switch (action.type) {
    case ADD_HEX: return byIdAddHex(state, action)
    case ADD_TABLE: return byIdAddTable(state, action)
    case DELETE_TABLE: return byIdDeleteTable(state, action)
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
      templates: undefined,
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
