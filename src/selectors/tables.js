import {getTemplateById} from './templates'
import {getTemplatePluginById} from './templateplugins'

export function getTables(stateTables) {
  const tables = []
  for (let i = 0; i < stateTables.allIds.length; i++) {
    const tableId = stateTables.allIds[i]
    const table = stateTables.byId[tableId]
    // Don't include the 'HEX' table. We manage that separately from other tables.
    if (tableId !== 'HEX') {
      tables.push({
        id: table.id,
        name: table.name,
        code: table.code,
        description: table.description,
        entries: table.entries,
        template: table.template
      })
    }
  }
  return tables
}

export function getByCodeTables(stateTables) {
  const tablesByCode = {}
  stateTables.allIds.forEach(
    id => {
      if (stateTables.byId[id]) { 
        tablesByCode[stateTables.byId[id].code] = stateTables.byId[id]
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
    // Have to be careful here. Can't query the "full" template, as it will cause an infinite loop
    table.template = getTemplateById(state, table.template)
    if (table.template.plugin) {
      table.template.plugin = getTemplatePluginById(state, table.template.plugin)
    }
  }
  return table
}