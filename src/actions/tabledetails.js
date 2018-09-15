const uuidv4 = require('uuid/v4');

/* action types */

export const ADD_TABLE_ENTRY = 'ADD_TABLE_ENTRY'

/* other constants */

/* action creators */

export function addTableEntry(table, tableEntriesIndex, weight, text) {
  return {
    type: 'ADD_TABLE_ENTRY', 
    payload: {
      'tableEntryId': uuidv4(), 
      'tableId': table.id, 
      'tableEntriesIndex': tableEntriesIndex, 
      'weight': weight, 
      'text': text,
      'entryDetailsGroupId': uuidv4()
    }
  }
}
