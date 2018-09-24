import {combineReducers} from 'redux'
import {UPDATE_TABLE_ENTRY} from '../actions/tabledetails'

function byId(state=null, action) {
  console.log(state)
  console.log(action)
  switch (action.type) {
    case UPDATE_TABLE_ENTRY: return byIdUpdateTableEntry(state, action)
    default: return state
  }
}

function allIds(state=null, action) {
  console.log(state)
  console.log(action)
  switch (action.type) {
    case UPDATE_TABLE_ENTRY: return allIdsUpdateTableEntry(state, action)
    default: return state
  }
}

function byIdUpdateTableEntry(state, action) {
  /*
  1. Remove all tag weights found in prevTableEntry
  2. Add tag weights found in tableEntry
  */
  const prevTagWeightIds = []
  action.payload.prevTableEntry.tagWeights.map(
    tw => prevTagWeightIds.push(tw.id)
  )
  const tagWeights = action.payload.tableEntry.tagWeights
  //remove prev
  const newState = {
    ...state,
  }
  for (let i; i < prevTagWeightIds.length; i++) {
    newState[prevTagWeightIds[i]] = undefined
  }
  //add new
  for (let i; i < tagWeights.length; i++) {
    newState[tagWeights[i].id] = {id: tagWeights[i].id, tag: tagWeights[i].tag, weight: tagWeights[i].weight}
  }
  return newState
}

function allIdsUpdateTableEntry(state, action) {
  /*
  1. Remove all tagWeight IDs found in prevTableEntry
  2. Add all tagWeight IDs found in tableEntry
  */
  const prevTagWeightIds = []
  action.payload.prevTableEntry.tagWeights.map(
    tw => prevTagWeightIds.push(tw.id)
  )
  const tagWeightIds = []
  action.payload.tableEntry.tagWeights.map(
    tw => tagWeightIds.push(tw.id)
  )
  return [
    ...state.filter(id => !prevTagWeightIds.includes(id)), //remove prev
    ...tagWeightIds //add new
  ]
}

export default combineReducers({byId: byId, allIds: allIds})