export function getFullTagWeightById(state, id) {
  const tagWeight = {...state.entities.tagWeights.byId[id]}
  // We nullify the tag when we delete "other tags", so we need to check that here
  return (tagWeight.tag) ? tagWeight : undefined
}