import { combineReducers } from 'redux'
import { ADD_HEX, UPDATE_HEX_TAGS } from '../actions/hexes'

function byId(state=null, action) {
  console.log(state)
  switch (action.type) {
    case ADD_HEX:
      return ({
        ...state,
        [action.payload.coordinates] : {
          id: action.payload.coordinates,
          text: action.payload.coordinates,
          addTags: [action.payload.terrain, action.payload.territory],
        }
      })

    case UPDATE_HEX_TAGS:
      return ({
        ...state,
        [action.payload.coordinates] : {
          addTags: [action.payload.terrain, action.payload.territory],
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
      return [...state.filter(item => item != action.payload.coordinates), action.payload.coordinates].sort()

    default:
      return state
  }
}

export default combineReducers({byId: byId, allIds: allIds})