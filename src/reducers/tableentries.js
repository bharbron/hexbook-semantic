import { combineReducers } from 'redux'
import { ADD_HEX, UPDATE_HEX_TAGS } from '../actions/hexes'

function byId(state=null, action) {
  console.log(state)
  console.log(action)
  switch (action.type) {
    case ADD_HEX: return byIdAddHex(state, action)
    case UPDATE_HEX_TAGS: return byIdUpdateHexTags(state, action)
    default: return state
  }
}

function allIds(state=null, action) {
  console.log(state)
  console.log(action)
  switch (action.type) {
    case ADD_HEX: return allIdsAddHex(state, action)
    default: return state
  }
}

function byIdAddHex(state, action) {
  // Don't overwrite -- if a hex already exists at these coordinates, don't add anything
  if (!state[action.payload.coordinates]) {
    return ({
      ...state,
      [action.payload.coordinates] : {
        id: action.payload.coordinates,
        text: action.payload.coordinates,
        addTags: [action.payload.terrain, action.payload.territory],
      }
    })
  }
  return state
}

function byIdUpdateHexTags(state, action) {
  return ({
    ...state,
    [action.payload.coordinates] : {
      ...state[action.payload.coordinates],
      addTags: [action.payload.newTerrain, action.payload.newTerritory],
    }
  })
}

function allIdsAddHex(state, action) {
  const coordinates = action.payload.coordinates
  return [...state.filter(item => item != coordinates), coordinates]
}

export default combineReducers({byId: byId, allIds: allIds})