const uuidv4 = require('uuid/v4');

/* action types */

export const ADD_TABLE_ENTRY = 'ADD_TABLE_ENTRY'
export const UPDATE_TABLE_ENTRY_WEIGHT = 'UPDATE_TABLE_ENTRY_WEIGHT'
export const UPDATE_TABLE_ENTRY_TEXT = 'UPDATE_TABLE_ENTRY_TEXT'

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

export function updateTableEntryWeight(tableEntry, weight) {
  return {
    type: UPDATE_TABLE_ENTRY_WEIGHT,
    payload: {
      'tableEntryId': tableEntry.id,
      'weight': weight
    }
  }
}

export function updateTableEntryText(tableEntry, text) {
  return {
    type: UPDATE_TABLE_ENTRY_TEXT,
    payload: {
      'tableEntryId': tableEntry.id,
      'text': text
    }
  }
}