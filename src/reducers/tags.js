import { combineReducers } from 'redux'
import { ADD_HEX, UPDATE_HEX_TAGS, UPDATE_HEX_COORDINATES } from '../actions/hexes'
import { ADD_OTHER_TAG, DELETE_OTHER_TAG } from '../actions/tags'

// Tags is a little special in that it doesn't divide byId and allIds into separate reducers
// There are certain actions where allIds would need to make decisions based on contents of tags in byId
function tagsReducer(state=null, action) {
  console.log(state)
  console.log(action)
  switch (action.type) {
    case ADD_HEX: 
      return addHex(state, action)

    default:
      return state
  }
}

function addHex(state, action) {
  //Was this an attempt to overwrite an existing hex? If so, ignore it
  const coordinates = action.payload.coordinates
  const terrain = action.payload.terrain
  const territory = action.payload.territory
  if (hexTagExistsAtCoordinates(state, coordinates)) {
    console.log('hexTagExistsAtCoordinates = true')
    return state
  }
  let newById = {...state.byId}
  //have to do these separately in case terrain and territory have the same value
  if (terrain) {
    newById = {
      ...newById,
      [terrain]: createOrUpdateTerrainTag(newById, coordinates, terrain)
    }
  }
  if (territory) {
    newById = {
      ...newById,
      [territory]: createOrUpdateTerritoryTag(newById, coordinates, territory)
    }
  }

  let newAllIds = [...state.allIds]
  //have to do these separately in case terrain and territory have the same value
  if (terrain) {
    newAllIds = [
      ...newAllIds.filter(id => id != terrain),
      terrain
    ]
  }
  if (territory) {
    newAllIds = [
      ...newAllIds.filter(id => id != territory),
      territory
    ]
  }
  const newState = {
    ...state,
    byId: newById,
    allIds: newAllIds
  }
  console.log('reducers.tags.addHex: newState')
  console.log(newState)
  return newState
}

function createOrUpdateTerrainTag(byId, coordinates, terrain) {
  if ( byId[terrain] ) {
    return ({
      ...byId[terrain],
      terrainHexes: [...byId[terrain].terrainHexes.filter(item => item != coordinates), coordinates]
    })
  }
  else {
    return ({
      id: terrain,
      text: terrain,
      terrainHexes: [coordinates],
      territoryHexes: [],
    })
  }
}

function createOrUpdateTerritoryTag(byId, coordinates, territory) {
  if ( byId[territory] ) {
    return ({
      ...byId[territory],
      territoryHexes: [...byId[territory].territoryHexes.filter(item => item != coordinates), coordinates]
    })
  }
  else {
    return ({
      id: territory,
      text: territory,
      terrainHexes: [],
      territoryHexes: [coordinates],
    })
  }
}

function hexTagExistsAtCoordinates(state, coordinates) {
  for (let i = 0; i < state.allIds.length; i++) {
    const id = state.allIds[i]
    if (state.byId[id].terrainHexes.includes(coordinates) || state.byId[id].territoryHexes.includes(coordinates)) {
      return true
    }
  }
  return false
}

export default tagsReducer
