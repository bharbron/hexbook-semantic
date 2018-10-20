const uuidv4 = require('uuid/v4');

/* action types */

export const ADD_TEMPLATE = 'ADD_TEMPLATE'
export const DELETE_TEMPLATE = 'DELETE_TEMPLATE'
export const UPDATE_TEMPLATE = 'UPDATE_TEMPLATE'

/* other constants */

/* action creators */

export function addTemplate(name, description, plugin, table, properties, metadata) {
  return {
    type: ADD_TEMPLATE, 
    payload: {
      'id': uuidv4(), 
      'name': name, 
      'description': description, 
      'plugin': plugin, 
      'table': table,
      'properties': properties,
      'metadata': metadata,
    }
  }
}

export function deleteTemplate(template) {
  return {type: DELETE_TEMPLATE, payload: {'template': template}}
}

export function updateTemplate(template, prevTemplate) {
  return {
    type: UPDATE_TEMPLATE, 
    payload: {
      template: template,
      prevTemplate: prevTemplate
    }
  }
}
