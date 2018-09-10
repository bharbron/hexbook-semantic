import { combineReducers } from 'redux'
import { ADD_HEX, UPDATE_HEX_TAGS, UPDATE_HEX_COORDINATES } from '../actions/hexes'

function byId(state=null, action) {
  console.log(state)
  console.log(action)
  switch (action.type) {
    case ADD_HEX:
      return byIdAddHex(state, action)

    case UPDATE_HEX_TAGS:
      return byIdUpdateHexTags(state, action)

    default:
      return state
  }
}

function allIds(state=null, action) {
  console.log(state)
  console.log(action)
  switch (action.type) {
    case ADD_HEX:
      return allIdsAddHex(state, action)

    default:
      return state
  }
}

function byIdAddHex(state, action) {
  return ({
    ...state,
    [action.payload.newCoordinates] : {
      id: action.payload.newCoordinates,
      text: action.payload.newCoordinates,
      addTags: [action.payload.newTerrain, action.payload.newTerritory],
    }
  })
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
  const newCoordinates = action.payload.newCoordinates
  return [...state.filter(item => item != newCoordinates), newCoordinates]
}

export default combineReducers({byId: byId, allIds: allIds})