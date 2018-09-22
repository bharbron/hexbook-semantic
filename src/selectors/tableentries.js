import {getFullEntryDetailById} from './entrydetails'
import {getFullTagWeightById} from './tagweights'

export function getFullTableEntryById(stateEntities, id) {
  const tableEntry = {...stateEntities.tableEntries.byId[id]}
  if (tableEntry.entryDetailsGroup) {
    const entryDetailsIds = stateEntities.entryDetailsGroups.byId[tableEntry.entryDetailsGroup].entryDetails
    if (entryDetailsIds) {
      tableEntry['entryDetails'] = entryDetailsIds.map(id => getFullEntryDetailById(stateEntities, id))
    }
  }
  if (tableEntry.tagWeights) {
    tableEntry['tagWeights'] = tableEntry['tagWeights'].map(id => getFullTagWeightById(stateEntities, id))
  }
  return tableEntry
}

export function getFullTableEntries(stateEntities) {
  /*
  Return a byId lookup object of all "full" table entries
  */
  const fullTableEntries = {}
  stateEntities.tableEntries.allIds.map(id => {
    fullTableEntries[id] = getFullTableEntryById(stateEntities, id)
  })
  return fullTableEntries
}