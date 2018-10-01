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
    const tagWeights = []
    tableEntry['tagWeights'].map(
      id => {
        const tagWeight = getFullTagWeightById(stateEntities, id)
        if (tagWeight) {
          tagWeights.push(tagWeight)
        }
        return true
      }
    )
    tableEntry['tagWeights'] = tagWeights
  }
  return tableEntry
}

export function getFullTableEntriesLookup(stateEntities) {
  /*
  Return a byId lookup object of all "full" table entries
  */
  const fullTableEntries = {}
  stateEntities.tableEntries.allIds.map(id => {
    fullTableEntries[id] = getFullTableEntryById(stateEntities, id)
    return true
  })
  return fullTableEntries
}
