import { combineReducers } from 'redux'
import { ADD_HEX, UPDATE_HEX_TAGS } from '../actions/hexes'
import { ADD_OTHER_TAG, DELETE_OTHER_TAG } from '../actions/tags'

// Tags is a little special in that it doesn't divide byId and allIds into separate reducers
// There are certain actions where allIds would need to make decisions based on contents of tags in byId
function tagsReducer(state=null, action) {
  console.log(state)
  console.log(action)
  switch (action.type) {
    case ADD_HEX: return addHex(state, action)
    case UPDATE_HEX_TAGS: return updateHexTags(state, action)
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
    console.log('hexTagExistsAtCoordinates = true')
    return state
  }
  let newById = {...state.byId}
  //have to do these separately in case terrain and territory have the same value
  newById = {
    ...newById,
    [terrain]: createOrUpdateTerrainTag(newById, coordinates, terrain)
  }
  newById = {
    ...newById,
    [territory]: createOrUpdateTerritoryTag(newById, coordinates, territory)
  }

  let newAllIds = [...state.allIds]
  //have to do these separately in case terrain and territory have the same value
  newAllIds = [
    ...newAllIds.filter(id => id != terrain),
    terrain
  ]
  newAllIds = [
    ...newAllIds.filter(id => id != territory),
    territory
  ]

  return {
    byId: newById,
    allIds: newAllIds
  }
}

function updateHexTags(state, action) {
  const coordinates = action.payload.coordinates
  const newTerrain = action.payload.newTerrain
  const newTerritory = action.payload.newTerritory
  
  let newById = {...state.byId}
  //remove the old tags
  //have to do these separately in case terrain and territory have the same value
  const oldTerrain = getTerrainTagAtCoordinates(state, coordinates)
  newById = {
    ...newById,
    [oldTerrain]: {
      ...newById[oldTerrain],
      terrainHexes: [
        ...newById[oldTerrain].terrainHexes.filter(hex => hex != coordinates)
      ]
    }
  }
  const oldTerritory = getTerritoryTagAtCoordinates(state, coordinates)
  newById = {
    ...newById,
    [oldTerritory]: {
      ...newById[oldTerritory],
      territoryHexes: [
        ...newById[oldTerritory].territoryHexes.filter(hex => hex != coordinates)
      ]
    }
  }

  //add new tags
  //have to do these separately in case terrain and territory have the same value
  newById = {
    ...newById,
    [newTerrain]: createOrUpdateTerrainTag(newById, coordinates, newTerrain)
  }
  newById = {
    ...newById,
    [newTerritory]: createOrUpdateTerritoryTag(newById, coordinates, newTerritory)
  }

  let newAllIds = [...state.allIds]
  //have to do these separately in case terrain and territory have the same value
  newAllIds = [
    ...newAllIds.filter(id => id != newTerrain),
    newTerrain
  ]
  newAllIds = [
    ...newAllIds.filter(id => id != newTerritory),
    newTerritory
  ]

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
    allIds: [
      ...state.allIds.filter(id => id != tag),
      tag
    ]
  }
}

function deleteOtherTag(state, action) {
  const tag = action.payload.tag
  return {
    byId: {
      ...state.byId,
      [tag]: null
    },
    allIds: [
      ...state.allIds.filter(id => id != tag)
    ]
  }
}

function createOrUpdateTerrainTag(tagsById, coordinates, terrain) {
  if ( tagsById[terrain] ) {
    return ({
      ...tagsById[terrain],
      terrainHexes: [...tagsById[terrain].terrainHexes.filter(id => id != coordinates), coordinates]
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
      territoryHexes: [...tagsById[territory].territoryHexes.filter(id => id != coordinates), coordinates]
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

function getTerrainTagAtCoordinates(state, coordinates) {
  for (let i = 0; i < state.allIds.length; i++) {
    const id = state.allIds[i]
    if (state.byId[id].terrainHexes.includes(coordinates)) {
      return id
    }
  } 
}

function getTerritoryTagAtCoordinates(state, coordinates) {
  for (let i = 0; i < state.allIds.length; i++) {
    const id = state.allIds[i]
    if (state.byId[id].territoryHexes.includes(coordinates)) {
      return id
    }
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
