import { combineReducers } from 'redux'
import { ADD_HEX } from '../actions/hexes'

function byId(state=null, action) {
  console.log(state)
  switch (action.type) {
    case ADD_HEX:
      return state

    default:
      return state
  }
}

function allIds(state=null, action) {
  console.log(state)
  switch (action.type) {
    case ADD_HEX:
      return state

    default:
      return state
  }
}

export default combineReducers({byId: byId, allIds: allIds})