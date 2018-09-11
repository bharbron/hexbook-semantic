import { combineReducers } from 'redux'
import { ADD_HEX } from '../actions/hexes'

function byId(state=null, action) {
  console.log(state)
  console.log(action)
  switch (action.type) {
    case ADD_HEX: return byIdAddHex(state, action)
    default: return state
  }
}

function allIds(state=null, action) {
  console.log(state)
  console.log(action)
  switch (action.type) {
    default: return state
  }
}

function byIdAddHex(state, action) {
  //For the HEX table, we'll use the hex coordinates as the ID for each table entry, other tables will use uuid4
  //should be safe to assume no collision between the two
  return ({
    ...state,
    'HEX': {
      ...state['HEX'],
      entries: [
        //avoid duplicates
        ...state['HEX'].entries.filter(item => item != action.payload.coordinates),
        action.payload.coordinates
      ].sort()
    }
  })
}

export default combineReducers({byId: byId, allIds: allIds})