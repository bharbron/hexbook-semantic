import {combineReducers} from 'redux'
import {ADD_TEMPLATE, DELETE_TEMPLATE, UPDATE_TEMPLATE} from '../actions/templates'
import {arrayWithPush} from './helpers'

function byId(state=null, action) {
  console.log(state)
  console.log(action)
  switch (action.type) {
    case ADD_TEMPLATE: return byIdAddTemplate(state, action)
    case UPDATE_TEMPLATE: return byIdUpdateTemplate(state, action)
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
      properties: action.payload.properties,
      metadata: action.payload.metadata,
    }
  }
}

function byIdUpdateTemplate(state, action) {
  const template = action.payload.template
  return {
    ...state,
    [template.id]: {
      id: template.id,
      name: template.name,
      description: template.description,
      plugin: template.plugin.id,
      table: template.table.id,
      properties: {...template.properties},
      metadata: {...template.metadata},
    }
  }
}

function allIdsAddTemplate(state, action) {
  return arrayWithPush(state, action.payload.id)
}

export default combineReducers({byId: byId, allIds: allIds})
