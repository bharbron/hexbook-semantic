import { combineReducers } from 'redux'
import { ADD_HEX_DETAIL, DELETE_HEX_DETAIL } from '../actions/actions'
import { nextIntegerId } from '../helpers'

function add_hex_detail(state, action) {
  const hex_detail_id = nextIntegerId(state.entry_details.allIds)
      /* Make copy of the state so we don't mutate existing state. Redux hates that. */
      const new_state = Object.assign({}, state)

      /* Mutate the new state */
      new_state.tables.byId["HEX"].global_entry_details.push(hex_detail_id)
      new_state.entry_details.byId[hex_detail_id] = {id: hex_detail_id, text: action.text}
      new_state.entry_details.allIds.push(hex_detail_id)
      return new_state
}

function delete_hex_detail(state, action) {
  const new_state = Object.assign({}, state)

  let index = new_state.tables.byId["HEX"].global_entry_details.indexOf(action.id);
  new_state.tables.byId["HEX"].global_entry_details.splice(index, 1)
  delete new_state.entry_details.byId[action.id]
  index = new_state.entry_details.allIds.indexOf(action.id)
  new_state.entry_details.allIds.splice(index, 1)
  return new_state
}

function dataReducer(state=null, action) {
  switch (action.type) {
    case ADD_HEX_DETAIL:
      return add_hex_detail(state, action)

    case DELETE_HEX_DETAIL:
      return delete_hex_detail(state, action)

    default:
      return state
  }
}

export default combineReducers({data: dataReducer})