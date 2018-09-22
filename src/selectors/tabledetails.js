import {getFullTableEntryById} from './tableentries'

function getTableId(router) {
  const pathParts = router.location.pathname.split('/')
  return pathParts[pathParts.length - 1]
}

function getFullTableById(stateEntities, id) {
  /*
  Get the "full" details for a table, i.e. from the Table, from related tableEntries, from entryDetails related to those, from related tagWeights, etc.
  Build and return the full relation tree for this table
  */
  console.log('getFullTableById: stateEntities')
  console.log(stateEntities)
  const table = {...stateEntities.tables.byId[id]} //make a ...copy so we don't mutate the state
  if (table.template) {
    table['template'] = {...stateEntities.templates.byId[table.template]} //get full template details instead of just the ID
  }
  if (table.entries) {
    table['entries'] = table['entries'].map(id => getFullTableEntryById(stateEntities, id))
  }
  console.log('getFullTableById: table')
  console.log(table)
  return table
}

export {getTableId, getFullTableById}