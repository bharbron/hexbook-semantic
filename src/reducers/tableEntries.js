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
          table: 'HEX',
          inheritedDetails: true,
          entryDetails: [],
          addTags: [action.payload.terrain, action.payload.territory],
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