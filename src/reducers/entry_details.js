import { combineReducers } from 'redux'
import { ADD_HEX_DETAIL, DELETE_HEX_DETAIL } from '../actions/actions'

function byId(state=null, action) {
  console.log(state)
  switch (action.type) {
    case ADD_HEX_DETAIL:
      return ({
        ...state,
        [action.payload.entry_detail_id]: {id: action.payload.entry_detail_id, text: action.payload.entry_detail_text}
      })

    case DELETE_HEX_DETAIL:
      return ({
        ...state,
        [action.payload.entry_detail_id]: undefined
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
        action.payload.entry_detail_id
      ])

    case DELETE_HEX_DETAIL:
      return state.filter(item => item != action.payload.entry_detail_id)

    default:
      return state
  }
}

export default combineReducers({byId: byId, allIds: allIds})