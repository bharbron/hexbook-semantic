import store from '../store/store'

const uuidv4 = require('uuid/v4');

/* action types */

export const ADD_TABLE = 'ADD_TABLE'
export const DELETE_TABLE = 'DELETE_TABLE'

/* other constants */

/* action creators */

export function addTable(name, code, description) {
  return {type: 'ADD_TABLE', payload: {'id': uuidv4(), 'name': name, 'code': code, 'description': description}}
}

export function deleteTable(id) {
  return {type: DELETE_TABLE, payload: {'id': id}}
}