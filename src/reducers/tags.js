import { combineReducers } from 'redux'
import { ADD_HEX } from '../actions/hexes'

function territory_tag_to_add(state, territory, coordinates) {
  // Need to check if the tag already exists, so we don't overwrite it
  // For territory coordinate, if a "other" hex exists, update the type to "territory"
  if ( state[territory] !== undefined ) {
    if ( state[territory].type === 'other' || state[territory].type === 'territory' ) {
      return {...state[territory], type: 'territory', table_entries: [...state[territory].table_entries, coordinates]}
    }
    else {
      return {...state[territory], table_entries: [...state[territory].table_entries, coordinates]}
    }
  }
  return {
    id: territory,
    type: 'territory',
    table_entries: [coordinates]
  }
}

function terrain_tag_to_add(state, terrain, coordinates) {
  // Need to check if the tag already exists, so we don't overwrite it
  // For terrain coordinate, if an "other" or "territory" hex exists, update the type to "terrain"
  if ( state[terrain] !== undefined ) {
    return {...state[terrain], type: 'terrain', table_entries: [...state[terrain].table_entries, coordinates]}
  }
  return {
    id: terrain,
    type: 'terrain',
    table_entries: [coordinates]
  }
}

function byId(state=null, action) {
  console.log(state)
  switch (action.type) {
    case ADD_HEX:
      return ({
        ...state,
        [action.payload.territory]: territory_tag_to_add(state, action.payload.territory, action.payload.coordinates),
        [action.payload.terrain]: terrain_tag_to_add(state, action.payload.terrain, action.payload.coordinates)
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
      const new_state = [...state.filter(item => item != action.payload.territory), action.payload.territory]
      if ( action.payload.terrain != action.payload.territory ) {
        return [...new_state.filter(item => item != action.payload.terrain), action.payload.terrain].sort()
      }
      return new_state.sort()

    default:
      return state
  }
}

export default combineReducers({byId: byId, allIds: allIds})