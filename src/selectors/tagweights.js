export function getFullTagWeightById(stateEntities, id) {
  const tagWeight = {...stateEntities.tagWeights.byId[id]}
  // We nullify the tag when we delete "other tags", so we need to check that here
  return (tagWeight.tag) ? tagWeight : undefined
}