import { combineReducers } from 'redux'
import { ADD_HEX_DETAIL } from '../actions/actions'
import nextIntegerId from '../helpers'

function tableReducer(state=null, action) {
  switch (action.type) {
    case ADD_HEX_DETAIL:
      const hex_detail_id = nextIntegerId(state.entry_details.allIds)
      /* Make copy of the state so we don't mutate existing state */
      const new_state = Object.assign({}, state)

      /* Mutate the new state */
      new_state.tables.byId["HEX"].global_entry_details.push(hex_detail_id)
      new_state.entry_details.byId[hex_detail_id] = {id: hex_detail_id, text: action.text}
      new_state.entry_details.allIds.push(hex_detail_id)
      return new_state
    default:
      return state
  }
}

export default combineReducers({tableReducer})