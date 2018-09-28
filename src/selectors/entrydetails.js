export function getFullEntryDetailById(stateEntities, id) {
  const entryDetail = {...stateEntities.entryDetails.byId[id]}
  return entryDetail
}