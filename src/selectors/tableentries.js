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
    tableEntry['tagWeights'].forEach(
      id => {
        const tagWeight = getFullTagWeightById(state, id)
        if (tagWeight) {
          tagWeights.push(tagWeight)
        }
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
  state.entities.tableEntries.allIds.forEach(
    id => {
      fullTableEntries[id] = getFullTableEntryById(state, id)
    }
  )
  return fullTableEntries
}
