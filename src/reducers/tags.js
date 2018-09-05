import { combineReducers } from 'redux'
import { ADD_HEX } from '../actions/hexes'

function territoryTagToAdd(state, territory) {
  // Need to check if the tag already exists, so we don't overwrite it
  // For territory coordinate, if a "other" hex exists, update the type to "territory"
  if ( state[territory] ) {
    if ( state[territory].type === 'other' || state[territory].type === 'territory' ) {
      return {...state[territory], type: 'territory'}
    }
    else {
      return {...state[territory]}
    }
  }
  return {
    id: territory,
    text: territory,
    type: 'territory'
  }
}

function terrainTagToAdd(state, terrain) {
  // Need to check if the tag already exists, so we don't overwrite it
  // For terrain coordinate, if an "other" or "territory" hex exists, update the type to "terrain"
  return {
    ...state[terrain],
    id: terrain,
    text: terrain,
    type: 'terrain'
  }
}

function byId(state=null, action) {
  console.log(state)
  switch (action.type) {
    case ADD_HEX:
      return ({
        ...state,
        [action.payload.territory]: territoryTagToAdd(state, action.payload.territory),
        [action.payload.terrain]: terrainTagToAdd(state, action.payload.terrain)
      })

    default:
      return state
  }
}

function allIds(state=null, action) {
  console.log(state)
  switch (action.type) {
    case ADD_HEX:
      // We want to avoid duplicates in the list, so doing some filtering here
      const newState = [...state.filter(item => item != action.payload.territory), action.payload.territory]
      if ( action.payload.terrain != action.payload.territory ) {
        return [...newState.filter(item => item != action.payload.terrain), action.payload.terrain].sort()
      }
      return newState.sort()

    default:
      return state
  }
}

export default combineReducers({byId: byId, allIds: allIds})