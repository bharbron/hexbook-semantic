import { combineReducers } from 'redux'
import { ADD_HEX } from '../actions/hexes'

function addHex(state, action) {
  //Because of the way tags get added as hexes are added, a tag can be added multiple times, and this is okay
  //We do need to track what 'types' it has been added as though
  //This makes things a little complicated
  const {payload} = action;
  const {terrain, territory} = payload;

  const newState = {...state}

  if (newState[terrain]) {
    newState[terrain] = {
      ...newState[terrain],
      types: [
        ...newState[terrain].types.filter(item => item != 'terrain'),
        'terrain'
      ]
    }
  }
  else {
    newState[terrain] = {
      id: terrain,
      text: terrain,
      types: ['terrain']
    }
  }

  if (newState[territory]) {
    newState[territory] = {
      ...newState[territory],
      types: [
        ...newState[territory].types.filter(item => item != 'territory'),
        'territory'
      ]
    }
  }
  else {
    newState[territory] = {
      id: territory,
      text: territory,
      types: ['territory']
    }
  }

  return newState
}

function byId(state=null, action) {
  console.log(state)
  switch (action.type) {
    case ADD_HEX:
      return addHex(state, action)

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
      return [...newState.filter(item => item != action.payload.terrain), action.payload.terrain].sort()

    default:
      return state
  }
}

export default combineReducers({byId: byId, allIds: allIds})