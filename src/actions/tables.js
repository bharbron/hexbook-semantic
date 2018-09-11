import store from '../store/store'

const uuidv4 = require('uuid/v4');

/* action types */

export const ADD_TABLE = 'ADD_TABLE'
export const DELETE_TABLE = 'DELETE_TABLE'

/* other constants */

/* action creators */

export function addTable(id, code, name, description) {
  return {type: 'ADD_TABLE', payload: {'id': id, 'code': code, 'name': name, 'description': description}}
}

export function deleteTable(id) {
  return {type: DELETE_TABLE, payload: {'id': id}}
}