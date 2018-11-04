const uuidv4 = require('uuid/v4');

/* action types */

export const ADD_TABLE = 'ADD_TABLE'
export const DELETE_TABLE = 'DELETE_TABLE'
export const UPDATE_TABLE = 'UPDATE_TABLE'

/* other constants */

/* action creators */

export function addTable(name, code, description) {
  return {type: ADD_TABLE, payload: {'id': uuidv4(), 'name': name, 'code': code, 'description': description}}
}

export function deleteTable(table) {
  return {type: DELETE_TABLE, payload: {'table': table}}
}

export function updateTable(table, prevTable) {
  return {type: UPDATE_TABLE, payload: {table: table, prevTable: prevTable}}
}
