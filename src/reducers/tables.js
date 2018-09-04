import { combineReducers } from 'redux'
import { ADD_HEX_DETAIL, DELETE_HEX_DETAIL } from '../actions/actions'

function byId(state=null, action) {
  console.log(state)
  switch (action.type) {
    case ADD_HEX_DETAIL:
      return ({
        ...state,
        "HEX": {
          ...state["HEX"],
          global_entry_details: [
            ...state["HEX"].global_entry_details,
            action.payload.entry_detail_id
          ]
        }
      })

    case DELETE_HEX_DETAIL:
      return ({
        ...state,
        "HEX": {
          ...state["HEX"],
          global_entry_details: state["HEX"].global_entry_details.filter(item => item != action.payload.entry_detail_id)
        }
      })

    default:
      return state
  }
}

function allIds(state=null, action) {
  console.log(state)
  switch (action.type) {
    case ADD_HEX_DETAIL:
      return state

    case DELETE_HEX_DETAIL:
      return state

    default:
      return state
  }
}

export default combineReducers({byId: byId, allIds: allIds})