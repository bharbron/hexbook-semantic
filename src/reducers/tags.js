import { combineReducers } from 'redux'
import { ADD_HEX, UPDATE_HEX_TAGS } from '../actions/hexes'
import { ADD_OTHER_TAG, DELETE_OTHER_TAG } from '../actions/tags'

function newTerrainHex(state, coordinates, terrain) {
  if ( state[terrain] ) {
    return ({
      ...state[terrain],
      terrainHexes: [...state[terrain].terrainHexes, coordinates]
    })
  }
  else {
    return ({
      id: terrain,
      text: terrain,
      terrainHexes: [coordinates],
      territoryHexes: [],
      otherTag: false
    })
  }
}

function newTerritoryHex(state, coordinates, territory) {
  if ( state[territory] ) {
    return ({
      ...state[territory],
      territoryHexes: [...state[territory].territoryHexes, coordinates]
    })
  }
  else {
    return ({
      id: territory,
      text: territory,
      terrainHexes: [],
      territoryHexes: [coordinates],
      otherTag: false
    })
  }
}

function newOtherTag(state, tag) {
  if ( state[tag] ) {
    return ({
      ...state[tag],
      otherTag: true
    })
  }
  else {
    return ({
      id: tag,
      text: tag,
      terrainHexes: [],
      territoryHexes: [],
      otherTag: true
    })
  }
}

function removeTerrainHexFromTag(tag, coordinates) {
  // Remove terrainHex reference from this tag, delete the tag if we can
  const newTag = {
    ...tag,
    terrainHexes: [...tag.terrainHexes.filter(item => item != coordinates)]
  }
  // If the tag has no references to anything left, it can be effectively deleted. I.e. don't return it
  if ( newTag.territoryHexes.length > 0 || newTag.terrainHexes.length > 0 || newTag.otherTag == true ) {
    return newTag
  }
}

function removeTerritoryHexFromTag(tag, coordinates) {
  // Remove territoryHex reference from this tag, delete the tag if we can
  const newTag = {
    ...tag,
    territoryHexes: [...tag.territoryHexes.filter(item => item != coordinates)]
  }
  // If the tag has no references to anything left, it can be effectively deleted. I.e. don't return it
  if ( newTag.territoryHexes.length > 0 || newTag.terrainHexes.length > 0 || newTag.otherTag == true ) {
    return newTag
  }
}

function createOrUpdateTerrainTag(state, coordinates, terrain) {
  if ( state[terrain] ) {
    return ({
      ...state[terrain],
      terrainHexes: [...state[terrain].terrainHexes.filter(item => item != coordinates), coordinates]
    })
  }
  else {
    return ({
      id: terrain,
      text: terrain,
      terrainHexes: [coordinates],
      territoryHexes: [],
      otherTag: false
    })
  }
}

function createOrUpdateTerritoryTag(state, coordinates, territory) {
  if ( state[territory] ) {
    return ({
      ...state[territory],
      territoryHexes: [...state[territory].territoryHexes.filter(item => item != coordinates), coordinates]
    })
  }
  else {
    return ({
      id: territory,
      text: territory,
      terrainHexes: [],
      territoryHexes: [coordinates],
      otherTag: false
    })
  }
}

function byIdAddHex(state, action) {
  /*
  1. Remove hex reference from the replaced hex's terrain tag
  2. Remove hex reference from the replaced hex's territory tag
  3. Create or update new territory tag with reference to new hex
  4. Create or update new terrain tag with reference to new hex
  */
  const newCoordinates = action.payload.newCoordinates
  const newTerrain = action.payload.newTerrain
  const newTerritory = action.payload.newTerritory
  if ( action.payload.replaceHex ) {
    const replaceCoordinates = action.payload.replaceHex.id
    const replaceTerrain = action.payload.replaceHex.addTags[0]
    const replaceTerritory = action.payload.replaceHex.addTags[1]
    return ({
      ...state,
      [replaceTerrain]: removeTerrainHexFromTag(state[replaceTerrain], replaceCoordinates),
      [replaceTerritory]: removeTerritoryHexFromTag(state[replaceTerritory], replaceCoordinates),
      [newTerrain]: createOrUpdateTerrainTag(state, newCoordinates, newTerrain),
      [newTerritory]: createOrUpdateTerritoryTag(state, newCoordinates, newTerritory),
    })
  }
  else {
    return ({
      ...state,
      [newTerrain]: createOrUpdateTerrainTag(state, newCoordinates, newTerrain),
      [newTerritory]: createOrUpdateTerritoryTag(state, newCoordinates, newTerritory),
    })
  }
}

function byId(state=null, action) {
  console.log(state)
  let newState = {}
  switch (action.type) {
    case ADD_HEX:
      return byIdAddHex(state, action)

    case UPDATE_HEX_TAGS:
      return ({
        ...state,
        //remove references from the old tags
        [action.payload.oldTerrain]: {
          ...state[action.payload.oldTerrain],
          terrainHexes: [
            ...state[action.payload.oldTerrain].terrainHexes.filter(item => item != action.payload.coordinates)
          ]
        },
        [action.payload.oldTerritory]: {
          ...state[action.payload.oldTerritory],
          territoryHexes: [
            ...state[action.payload.oldTerritory].territoryHexes.filter(item => item != action.payload.coordinates)
          ]
        },
        //update the new tags
        [action.payload.newTerrain]: newTerrainHex(state, action.payload.coordinates, action.payload.newTerrain),
        [action.payload.newTerritory]: newTerritoryHex(state, action.payload.coordinates, action.payload.newTerritory)
      })

    case ADD_OTHER_TAG:
      return ({
        ...state,
        [action.payload.tag]: newOtherTag(state, action.payload.tag)
      })

    case DELETE_OTHER_TAG:
      return ({
        ...state,
        [action.payload.tag]: {
          ...state[action.payload.tag],
          otherTag: false
        }
      })

    default:
      return state
  }
}

function wouldDeleteTerrainTag(tag, terrainHex) {
  // If we were to remove the terrainHex from this tag, would the tag be deletable?
  // i.e. Would it have any references left?
  console.log(tag)
  console.log(terrainHex)
  const testTag = {
    ...tag,
    terrainHexes: [...tag.terrainHexes.filter(item => item != terrainHex)]
  }
  console.log(testTag)
  if ( testTag.territoryHexes.length > 0 || testTag.terrainHexes.length > 0 || testTag.otherTag == true ) {
    console.log('false')
    return false
  }
  else {
    console.log('true')
    return true
  }
}

function wouldDeleteTerritoryTag(tag, territoryHex) {
  // If we were to remove the territoryHex from this tag, would the tag be deletable?
  // i.e. Would it have any references left?
  const testTag = {
    ...tag,
    territoryHexes: [...tag.territoryHexes.filter(item => item != territoryHex)]
  }
  if ( testTag.territoryHexes.length > 0 || testTag.terrainHexes.length > 0 || testTag.otherTag == true ) {
    return false
  }
  else {
    return true
  }
}

function allIdsAddHex(state, action) {
  /*
  1. If removing the replaceHex coordinate from the replaceTerrain tag would leave it with no references, remove it from the list
  2. If removing the replaceHex coordinate from the replaceTerritory tag would leave it with no references, remove it from the list
  3. Add the new terrain and territory tags to the list
  */
  const newCoordinates = action.payload.newCoordinates
  const newTerrain = action.payload.newTerrain
  const newTerritory = action.payload.newTerritory
  const replaceTerrainTag = action.payload.replaceTerrainTag
  const replaceTerritoryTag = action.payload.replaceTerritoryTag
  let newState = [...state]
  if (replaceTerrainTag && wouldDeleteTerrainTag(replaceTerrainTag, newCoordinates)) {
    newState = [...newState.filter(item => item != replaceTerrainTag.id)]
  }
  if (replaceTerritoryTag && wouldDeleteTerritoryTag(replaceTerritoryTag, newCoordinates)) {
    newState = [...newState.filter(item => item != replaceTerritoryTag.id)]
  }
  if ( newTerrain ) {
    newState = [...newState.filter(item => item != newTerrain), newTerrain]
  }
  if ( newTerritory ) {
    newState = [...newState.filter(item => item != newTerritory), newTerritory]
  }
  return newState
}

function allIds(state=null, action) {
  console.log(state)
  console.log(action)
  let newState = []
  switch (action.type) {
    case ADD_HEX:
      return allIdsAddHex(state, action)

    case UPDATE_HEX_TAGS:
      // We want to avoid duplicates in the list, so doing some filtering herez
      // We also want to prevent null, undefined, etc. ending up in this
      newState = [...state]
      if ( action.payload.newTerrain ) {
        newState = [...newState.filter(item => item != action.payload.newTerrain), action.payload.newTerrain]
      }
      if ( action.payload.newTerritory ) {
        newState = [...newState.filter(item => item != action.payload.newTerritory), action.payload.newTerritory]
      }
      return newState

    case ADD_OTHER_TAG:
      return ([
        ...state.filter(item => item != action.payload.tag),
        action.payload.tag
      ])

    case DELETE_OTHER_TAG:
      return state

    default:
      return state
  }
}

export default combineReducers({byId: byId, allIds: allIds})