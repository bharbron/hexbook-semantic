export function getFullTagWeightById(stateEntities, id) {
  const tagWeight = {...stateEntities.tagWeights.byId[id]}
  return tagWeight
}