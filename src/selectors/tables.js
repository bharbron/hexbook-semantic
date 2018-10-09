import {getFullTemplateById} from './templates'

export function getTables(state) {
  const hexTable = getFullTableById(state, 'HEX')
  const otherTables = []
  state.entities.tables.allIds.forEach(
    id => {
      if (id !== 'HEX') {
        const table = getFullTableById(state, id)
        if (table) {
          otherTables.push(table)
        }
      }
    }
  )
  // TODO: Alphabetize everything but the 'Hexes' table, then put the 'Hexes' table at the head of the array
  return [hexTable].concat(otherTables.sort(compareTemplates))
}

function compareTemplates(a, b) {
  /*
  For sorting an array of tables by their table names
  */
  if (a.name < b.name) {
    return -1
  }
  if (a.name > b.name) {
    return 1
  }
  return 0
}

export function getByCodeTables(state) {
  const tablesByCode = {}
  state.entities.tables.allIds.forEach(
    id => {
      if (state.entities.tables.byId[id]) { 
        tablesByCode[state.entities.tables.byId[id].code] = getFullTableById(state, id)
      }
    }
  )
  return tablesByCode
}

export function getTableById(state, id) {
  return {...state.entities.tables.byId[id]}
}

export function getFullTableById(state, id) {
  const table = getTableById(state, id)
  if (table.template) {
    table.template = getFullTemplateById(state, table.template)
  }
  return table
}
