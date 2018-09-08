import { combineReducers } from 'redux'
import { ADD_HEX, UPDATE_HEX_TAGS, UPDATE_HEX_COORDINATES } from '../actions/hexes'
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
  let newState = {...state}
  if ( action.payload.replaceHex ) {
    const replaceCoordinates = action.payload.replaceHex.id
    const replaceTerrain = action.payload.replaceHex.addTags[0]
    const replaceTerritory = action.payload.replaceHex.addTags[1]
    //have to do these separately to handle case where replaceTerrain and replaceTerritory have the same ID
    newState = {
      ...newState,
      [replaceTerrain]: removeTerrainHexFromTag(newState[replaceTerrain], replaceCoordinates)
    }
    newState = {
      ...newState,
      [replaceTerritory]: removeTerritoryHexFromTag(newState[replaceTerritory], replaceCoordinates)
    }
  }
  //also have to do these separately in case newTerrain and newTerritory have the same value
  newState = {
    ...newState,
    [newTerrain]: createOrUpdateTerrainTag(newState, newCoordinates, newTerrain)
  }
  newState = {
    ...newState,
    [newTerritory]: createOrUpdateTerritoryTag(newState, newCoordinates, newTerritory)
  }
  return newState
}

function byIdUpdateHexTags(state, action) {
  /*
  1. Remove terrain hex reference from oldTerrainTag, possibly delete Tag
  2. Remove territory hex reference from old TerritoryTag, possibly delete Tag
  3. Create or update tag for newTerrain
  4. Create or update tag for newTerritory
  */
  const coordinates = action.payload.coordinates
  const newTerrain = action.payload.newTerrain
  const newTerritory = action.payload.newTerritory
  const oldTerrainTag = action.payload.oldTerrainTag
  const oldTerritoryTag = action.payload.oldTerritoryTag
  const oldTerrainTagId = (oldTerrainTag) ? oldTerrainTag.id : undefined;
  const oldTerritoryTagId = (oldTerritoryTag) ? oldTerritoryTag.id : undefined;
  let newState = {...state}
  // Have to do all of these separately to handle cases where territory and terrain have the same ID,
  // otherwise terrainHexes and territoryHexes arrays won't be correct
  newState = {
    ...newState,
    [oldTerrainTagId]: (oldTerrainTagId) ? removeTerrainHexFromTag(newState[oldTerrainTagId], coordinates) : undefined
  }
  newState = {
    ...newState,
    [oldTerritoryTagId]: (oldTerritoryTagId) ? removeTerritoryHexFromTag(newState[oldTerritoryTagId], coordinates) : undefined
  }
  newState = {
    ...newState,
    [newTerrain]: createOrUpdateTerrainTag(newState, coordinates, newTerrain)
  }
  newState = {
    ...newState,
    [newTerritory]: createOrUpdateTerritoryTag(newState, coordinates, newTerritory)
  }
  return newState
}

function byIdUpdateHexCoordinates(state, action) {
  /*
  1. Remove hex reference from the replaced hex's terrain tag
  2. Remove hex reference from the replaced hex's territory tag
  3. Update references in the hex's terrain tag to the new coordinates
  4. Update referecens in the hex's territory tag to the new coordinates
  */
  const newCoordinates = action.payload.newCoordinates
  const oldHex = action.payload.oldHex
  const oldHexCoordinates = (oldHex) ? oldHex.id : undefined
  const terrain = oldHex.addTags[0]
  const territory = oldHex.addTags[1]
  const replaceHex = action.payload.replaceHex
  let newState = {...state}
  if (replaceHex) {
    const replaceCoordinates = replaceHex.id
    const replaceTerrain = replaceHex.addTags[0]
    const replaceTerritory = replaceHex.addTags[1]
    newState = {
      ...newState,
      [replaceTerrain]: removeTerrainHexFromTag(newState[replaceTerrain], replaceCoordinates)
    }
    newState = {
      ...newState,
      [replaceTerritory]: removeTerritoryHexFromTag(newState[replaceTerritory], replaceCoordinates)
    }
  }
  if (newState[terrain]) {
    newState = {
      ...newState,
      [terrain]: {
        ...newState[terrain],
        terrainHexes: [...newState[terrain].terrainHexes.filter(item => item != oldHexCoordinates), newCoordinates]
      }
    }
  }
  if (newState[territory]) {
    newState = {
      ...newState,
      [territory]: {
        ...newState[territory],
        territoryHexes: [...newState[territory].territoryHexes.filter(item => item != oldHexCoordinates), newCoordinates]
      }
    }
  }
  return newState
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

function wouldDeleteTag(tag, coordinates) {
  /*
  If we were to remove the coordinates from this tag's terrainHexes and territoryHexes, would the tag be deletable?
  i.e. Would it have any references left?
  */
  const testTag = {
    ...tag,
    terrainHexes: [...tag.terrainHexes.filter(item => item != coordinates)],
    territoryHexes: [...tag.territoryHexes.filter(item => item != coordinates)]
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
  if (replaceTerrainTag && wouldDeleteTag(replaceTerrainTag, newCoordinates)) {
    newState = [...newState.filter(item => item != replaceTerrainTag.id)]
  }
  if (replaceTerritoryTag && wouldDeleteTag(replaceTerritoryTag, newCoordinates)) {
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

function allIdsUpdateHexTags(state, action) {
  /*
  1. If removing the coordinates reference from oldTerrainTag would delete the tag, remove it from the list
  2. If removing the coordinates reference from oldTerritoryTag would delete the tag, remove it from the list
  3. Add the new terrain and territory tags to the list
  */
  const coordinates = action.payload.coordinates
  const newTerrain = action.payload.newTerrain
  const newTerritory = action.payload.newTerritory
  const oldTerrainTag = action.payload.oldTerrainTag
  const oldTerritoryTag = action.payload.oldTerritoryTag
  const oldTerrainTagId = (oldTerrainTag) ? oldTerrainTag.id : undefined;
  const oldTerritoryTagId = (oldTerritoryTag) ? oldTerritoryTag.id : undefined;
  let newState = [...state]
  if (oldTerrainTag && wouldDeleteTag(oldTerrainTag, coordinates)) {
    newState = [...newState.filter(item => item != oldTerrainTagId)]
  }
  if (oldTerritoryTag && wouldDeleteTag(oldTerritoryTag, coordinates)) {
    newState = [...newState.filter(item => item != oldTerritoryTagId)]
  }
  // Do these separately to avoid duplicates in cases where newTerrain and newTerritory have the same text
  if ( newTerrain ) {
    newState = [...newState.filter(item => item != newTerrain), newTerrain]
  }
  if ( newTerritory ) {
    newState = [...newState.filter(item => item != newTerritory), newTerritory]
  }
  return newState
}

function allIdsUpdateHexCoordinates(state, action) {
  /*
  1. If removing the replaceHex coordinate from the replaceTerrain tag would leave it with no references, remove it from the list
  2. If removing the replaceHex coordinate from the replaceTerritory tag would leave it with no references, remove it from the list
  3. Nothing else to be done: coordinate change doesn't change the tags on the hex
  */
  const newCoordinates = action.payload.newCoordinates
  const replaceTerrainTag = action.payload.replaceTerrainTag
  const replaceTerritoryTag = action.payload.replaceTerritoryTag
  let newState = [...state]
  if (replaceTerrainTag && wouldDeleteTag(replaceTerrainTag, newCoordinates)) {
    newState = [...newState.filter(item => item != replaceTerrainTag.id)]
  }
  if (replaceTerritoryTag && wouldDeleteTag(replaceTerritoryTag, newCoordinates)) {
    newState = [...newState.filter(item => item != replaceTerritoryTag.id)]
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
      return allIdsUpdateHexTags(state, action)

    case UPDATE_HEX_COORDINATES:
      return allIdsUpdateHexCoordinates(state, action)

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