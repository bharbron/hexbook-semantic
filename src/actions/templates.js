const uuidv4 = require('uuid/v4');

/* action types */

export const ADD_TEMPLATE = 'ADD_TEMPLATE'
export const DELETE_TEMPLATE = 'DELETE_TEMPLATE'
export const UPDATE_TEMPLATE = 'UPDATE_TEMPLATE'

/* other constants */

/* action creators */

export function addTemplate(name, description, plugin, table) {
  return {type: ADD_TEMPLATE, payload: {'id': uuidv4(), 'name': name, 'description': description, 'plugin': plugin, 'table': table}}
}

export function deleteTemplate(template) {
  return {type: DELETE_TEMPLATE, payload: {'template': template}}
}

export function updateTable(name, description, plugin, table, prevTemplate) {
  return {type: UPDATE_TEMPLATE, payload: {'name': name, 'description': description, 'plugin': plugin, 'table': table, prevTemplate: prevTemplate}}
}
