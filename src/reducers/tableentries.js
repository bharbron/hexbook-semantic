import { combineReducers } from 'redux'
import { ADD_HEX, UPDATE_HEX_TAGS, UPDATE_HEX_COORDINATES } from '../actions/hexes'

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

function byIdUpdateHexCoordinates(state, action) {
  const newCoordinates = action.payload.newCoordinates
  const oldHex = action.payload.oldHex
  const oldHexCoordinates = (oldHex) ? oldHex.id : undefined
  return ({
    ...state,
    [oldHexCoordinates]: undefined, //delete the hex at the old coordinates
    [newCoordinates]: {
      ...state[oldHexCoordinates], //copy info to the new coordinates
      id: newCoordinates,
      text: newCoordinates
    }
  })
}

function byId(state=null, action) {
  console.log(state)
  console.log(action)
  switch (action.type) {
    case ADD_HEX:
      return byIdAddHex(state, action)

    case UPDATE_HEX_TAGS:
      return byIdUpdateHexTags(state, action)

    case UPDATE_HEX_COORDINATES:
      return byIdUpdateHexCoordinates(state, action)

    default:
      return state
  }
}

function allIdsAddHex(state, action) {
  const newCoordinates = action.payload.newCoordinates
  return [...state.filter(item => item != newCoordinates), newCoordinates]
}

function allIdsUpdateHexCoordinates(state, action) {
  const newCoordinates = action.payload.newCoordinates
  const oldHex = action.payload.oldHex
  const oldHexCoordinates = (oldHex) ? oldHex.id : undefined
  return [...state.filter(item => item != oldHexCoordinates && item != newCoordinates), newCoordinates]
}

function allIds(state=null, action) {
  console.log(state)
  console.log(action)
  switch (action.type) {
    case ADD_HEX:
      return allIdsAddHex(state, action)

    case UPDATE_HEX_COORDINATES:
      return allIdsUpdateHexCoordinates(state, action)

    default:
      return state
  }
}

export default combineReducers({byId: byId, allIds: allIds})