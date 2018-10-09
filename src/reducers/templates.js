import {combineReducers} from 'redux'
import {ADD_TEMPLATE, DELETE_TEMPLATE, UPDATE_TEMPLATE} from '../actions/templates'
import {arrayWithPush} from './helpers'

function byId(state=null, action) {
  console.log(state)
  console.log(action)
  switch (action.type) {
    case ADD_TEMPLATE: return byIdAddTemplate(state, action)
    default: return state
  }
}

function allIds(state=null, action) {
  console.log(state)
  console.log(action)
  switch (action.type) {
    case ADD_TEMPLATE: return allIdsAddTemplate(state, action)
    default: return state
  }
}

function byIdAddTemplate(state, action) {
  return {
    ...state,
    [action.payload.id]: {
      id: action.payload.id,
      name: action.payload.name,
      description: action.payload.description,
      plugin: action.payload.plugin,
      table: action.payload.table,
    }
  }
}

function allIdsAddTemplate(state, action) {
  return arrayWithPush(state, action.payload.id)
}

export default combineReducers({byId: byId, allIds: allIds})
