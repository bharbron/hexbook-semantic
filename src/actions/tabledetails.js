const uuidv4 = require('uuid/v4');

/* action types */

export const ADD_TABLE_ENTRY = 'ADD_TABLE_ENTRY'
export const UPDATE_TABLE_ENTRY = 'UPDATE_TABLE_ENTRY'
export const DELETE_TABLE_ENTRY = 'DELETE_TABLE_ENTRY'

/* other constants */

/* action creators */

export function addTableEntry(table, weight, text) {
  return {
    type: ADD_TABLE_ENTRY, 
    payload: {
      'tableEntryId': uuidv4(), 
      'tableId': table.id, 
      'weight': weight, 
      'text': text,
      'entryDetailsGroupId': uuidv4()
    }
  }
}

export function updateTableEntry(tableEntry, prevTableEntry) {
  return {
    type: UPDATE_TABLE_ENTRY,
    payload: {
      'tableEntry': tableEntry,
      'prevTableEntry': prevTableEntry
    }
  }
}

export function deleteTableEntry(tableEntry) {
  return {type: DELETE_TABLE_ENTRY, payload: {tableEntry: tableEntry}}
}