import {ADD_HEX, UPDATE_HEX} from '../actions/hexes'
import {ADD_OTHER_TAG, DELETE_OTHER_TAG} from '../actions/tags'
import {arrayWithUniquePush, arrayWithItemRemoved} from './helpers'

// Tags is a little special in that it doesn't divide byId and allIds into separate reducers
// There are certain actions where allIds would need to make decisions based on contents of tags in byId
function tagsReducer(state=null, action) {
  console.log(state)
  console.log(action)
  switch (action.type) {
    case ADD_HEX: return addHex(state, action)
    case UPDATE_HEX: return updateHex(state, action)
    case ADD_OTHER_TAG: return addOtherTag(state, action)
    case DELETE_OTHER_TAG: return deleteOtherTag(state, action)
    default: return state
  }
}

function addHex(state, action) {
  //Was this an attempt to overwrite an existing hex? If so, ignore it
  const coordinates = action.payload.coordinates
  const terrain = action.payload.terrain
  const territory = action.payload.territory
  if (hexTagExistsAtCoordinates(state, coordinates)) {
    return state
  }
  let newById = {...state.byId}
  //There was a bug where 'undefined' tags were ending up in the store, so we need to filter those out
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
    newAllIds = arrayWithUniquePush(newAllIds, terrain)
  }
  if (territory) {
    newAllIds = arrayWithUniquePush(newAllIds, territory)
  }

  return {
    byId: newById,
    allIds: newAllIds
  }
}

function updateHex(state, action) {
  /*
  1. Check for changes in terrain tag and territory tag between prevHex and hex
  2. If unchanged, do nothing
  3. If changed, remove terrainHex/territoryHex reference for the old tag
  4. Add or update new tag, adding coordinates to terrainHex/territoryHex listing
  5. Make sure to ignore "undefined" tags
  */
  const coordinates = action.payload.hex.coordinates
  const terrain = action.payload.hex.terrain
  const territory = action.payload.hex.territory
  const prevTerrain = action.payload.prevHex.terrain
  const prevTerritory = action.payload.prevHex.territory
  let newById = {...state.byId}
  let newAllIds = [...state.allIds]

  // Terrain tag was changed
  if (prevTerrain !== terrain) {
    // Remove terrainHex from old terrain tag, if it exists (i.e. terrain wasn't 'undefined' in prevHex)
    if (prevTerrain) {
      newById = {
        ...newById,
        [prevTerrain]: {
          ...newById[prevTerrain],
          terrainHexes: arrayWithItemRemoved(newById[prevTerrain].terrainHexes, coordinates)
        }
      }
    }
    // Add or update the new terrain, unless it was blank/undefined
    if (terrain) {
      newById = {
        ...newById,
        [terrain]: createOrUpdateTerrainTag(newById, coordinates, terrain)
      }
      newAllIds = arrayWithUniquePush(newAllIds, terrain)
    }
  }

  // Territory tag was changed
  if (prevTerritory !== territory) {
    // Remove territoryHex from old territory tag, if it exists (i.e. territory wasn't 'undefined' in prevHex)
    if (prevTerritory) {
      newById = {
        ...newById,
        [prevTerritory]: {
          ...newById[prevTerritory],
          territoryHexes: arrayWithItemRemoved(newById[prevTerritory].territoryHexes, coordinates)
        }
      }
    }
    // Add or update the new territory, unless it was blank/undefined
    if (territory) {
      newById = {
        ...newById,
        [territory]: createOrUpdateTerritoryTag(newById, coordinates, territory)
      }
      newAllIds = arrayWithUniquePush(newAllIds, territory)
    }
  }

  return {
    byId: newById,
    allIds: newAllIds
  }
}

function addOtherTag(state, action) {
  const tag = action.payload.tag
  //If the tag already exists, do nothing
  if (state.byId[tag]) {
    return state
  }
  return {
    byId: {
      ...state.byId,
      [tag]: {
        id: tag,
        text: tag,
        terrainHexes: [],
        territoryHexes: []
      }
    },
    allIds: arrayWithUniquePush(state.allIds, tag)
  }
}

function deleteOtherTag(state, action) {
  const tag = action.payload.tag
  return {
    byId: {
      ...state.byId,
      [tag]: null
    },
    allIds: arrayWithItemRemoved(state.allIds, tag)
  }
}

function createOrUpdateTerrainTag(tagsById, coordinates, terrain) {
  if ( tagsById[terrain] ) {
    return ({
      ...tagsById[terrain],
      terrainHexes: arrayWithUniquePush(tagsById[terrain].terrainHexes, coordinates)
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

function createOrUpdateTerritoryTag(tagsById, coordinates, territory) {
  if ( tagsById[territory] ) {
    return ({
      ...tagsById[territory],
      territoryHexes: arrayWithUniquePush(tagsById[territory].territoryHexes, coordinates)
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
