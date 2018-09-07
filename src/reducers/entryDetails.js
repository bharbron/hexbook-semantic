import { combineReducers } from 'redux'
import { ADD_HEX_DETAIL, DELETE_HEX_DETAIL } from '../actions/hexes'

function byId(state=null, action) {
  console.log(state)
  switch (action.type) {
    case ADD_HEX_DETAIL:
      return ({
        ...state,
        [action.payload.entryDetailId]: {id: action.payload.entryDetailId, text: action.payload.entryDetailText}
      })

    case DELETE_HEX_DETAIL:
      return ({
        ...state,
        [action.payload.entryDetailId]: null
      })

    default:
      return state
  }
}

function allIds(state=null, action) {
  console.log(state)
  switch (action.type) {
    case ADD_HEX_DETAIL:
      return ([
        ...state,
        action.payload.entryDetailId
      ])

    case DELETE_HEX_DETAIL:
      return state.filter(item => item !== action.payload.entryDetailId)

    default:
      return state
  }
}

export default combineReducers({byId: byId, allIds: allIds})