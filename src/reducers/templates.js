import {combineReducers} from 'redux'
import {ADD_TEMPLATE, DELETE_TEMPLATE, UPDATE_TEMPLATE} from '../actions/templates'
import {DELETE_TABLE} from '../actions/tables'
import {arrayWithPush, arrayWithItemRemoved} from './helpers'

function byId(state=null, action) {
  console.log(state)
  console.log(action)
  switch (action.type) {
    case ADD_TEMPLATE: return byIdAddTemplate(state, action)
    case UPDATE_TEMPLATE: return byIdUpdateTemplate(state, action)
    case DELETE_TEMPLATE: return byIdDeleteTemplate(state, action)
    case DELETE_TABLE: return byIdDeleteTable(state, action)
    default: return state
  }
}

function allIds(state=null, action) {
  console.log(state)
  console.log(action)
  switch (action.type) {
    case ADD_TEMPLATE: return allIdsAddTemplate(state, action)
    case DELETE_TEMPLATE: return allIdsDeleteTemplate(state, action)
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

function byIdDeleteTemplate(state, action) {
  const template = action.payload.template
  return {
    ...state,
    [template.id]: undefined
  }
}

function byIdDeleteTable(state, action) {
  /*
  Loop through all templates associated with the table, remove any references to the table
  */
  const table = action.payload.table
  const newState = {...state}
  table.templates.forEach(
    template => {
      newState[template.id] = {
        ...newState[template.id],
        table: undefined
      }
    }
  )
  return newState
}

function allIdsAddTemplate(state, action) {
  return arrayWithPush(state, action.payload.id)
}

function allIdsDeleteTemplate(state, action) {
  return arrayWithItemRemoved(state, action.payload.template.id)
}

export default combineReducers({byId: byId, allIds: allIds})
