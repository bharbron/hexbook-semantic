import { combineReducers } from 'redux'
import { ADD_HEX, UPDATE_HEX_TAGS } from '../actions/hexes'
import { ADD_OTHER_TAG } from '../actions/tags'

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

function byId(state=null, action) {
  console.log(state)
  switch (action.type) {
    case ADD_HEX:
      return ({
        ...state,
        [action.payload.terrain]: newTerrainHex(state, action.payload.coordinates, action.payload.terrain),
        [action.payload.territory]: newTerritoryHex(state, action.payload.coordinates, action.payload.territory)
      })

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

    default:
      return state
  }
}

function allIds(state=null, action) {
  console.log(state)
  let newState = []
  switch (action.type) {
    case ADD_HEX:
      // We want to avoid duplicates in the list, so doing some filtering herez
      // We also want to prevent null, undefined, etc. ending up in this
      newState = [...state]
      if ( action.payload.terrain ) {
        newState = [...newState.filter(item => item != action.payload.terrain), action.payload.terrain]
      }
      if ( action.payload.territory ) {
        newState = [...newState.filter(item => item != action.payload.territory), action.payload.territory]
      }
      return newState

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

    default:
      return state
  }
}

export default combineReducers({byId: byId, allIds: allIds})