import { combineReducers } from 'redux'
import { ADD_HEX } from '../actions/hexes'

function byId(state=null, action) {
  console.log(state)
  switch (action.type) {
    case ADD_HEX:
      return ({
        ...state,
        [action.payload.coordinates] : {
          id: action.payload.coordinates,
          text: action.payload.coordinates,
          inheritedDetails: true,
          entryDetails: [],
          terrainTag: action.payload.terrain,
          territoryTag: action.payload.territory,
          addTags: [],
          weight: 1,
        }
      })

    default:
      return state
  }
}

function allIds(state=null, action) {
  console.log(state)
  switch (action.type) {
    case ADD_HEX:
      return [...state, action.payload.coordinates]

    default:
      return state
  }
}

export default combineReducers({byId: byId, allIds: allIds})