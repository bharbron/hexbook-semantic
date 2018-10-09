export function getFullEntryDetailById(state, id) {
  const entryDetail = {...state.entities.entryDetails.byId[id]}
  return entryDetail
}