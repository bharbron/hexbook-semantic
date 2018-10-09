import {getFullEntryDetailById} from './entrydetails'
import {getFullTagWeightById} from './tagweights'

export function getFullTableEntryById(state, id) {
  const tableEntry = {...state.entities.tableEntries.byId[id]}
  if (tableEntry.entryDetailsGroup) {
    const entryDetailsIds = state.entities.entryDetailsGroups.byId[tableEntry.entryDetailsGroup].entryDetails
    if (entryDetailsIds) {
      tableEntry['entryDetails'] = entryDetailsIds.map(id => getFullEntryDetailById(state, id))
    }
  }
  if (tableEntry.tagWeights) {
    const tagWeights = []
    tableEntry['tagWeights'].map(
      id => {
        const tagWeight = getFullTagWeightById(state, id)
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

export function getFullTableEntriesLookup(state) {
  /*
  Return a byId lookup object of all "full" table entries
  */
  const fullTableEntries = {}
  state.entities.tableEntries.allIds.map(id => {
    fullTableEntries[id] = getFullTableEntryById(state, id)
    return true
  })
  return fullTableEntries
}
