import { combineReducers } from 'redux'
import { ADD_HEX_DETAIL, DELETE_HEX_DETAIL } from '../actions/actions'
import { nextIntegerId } from '../helpers'

function add_hex_detail(state, action) {
  const hex_detail_id = nextIntegerId(state.entry_details.allIds)
  const new_state = {...state,
    tables: {...state.tables,
      byId: {...state.tables.byId,
        "HEX": {...state.tables.byId["HEX"],
          global_entry_details: [...state.tables.byId["HEX"].global_entry_details,
            hex_detail_id
          ]
        }
      }
    },
    entry_details: {...state.entry_details,
      byId: {...state.entry_details.byId,
        [hex_detail_id]: {id: hex_detail_id, text: action.text}
      },
      allIds: [...state.entry_details.allIds,
        hex_detail_id
      ]
    }
  }
  return new_state
}

function delete_hex_detail(state, action) {
  const id = action.id
  const new_state = {...state,
    tables: {...state.tables,
      byId: {...state.tables.byId,
        "HEX": {...state.tables.byId["HEX"],
          global_entry_details: state.tables.byId["HEX"].global_entry_details.filter(item => item != id)
        }
      }
    },
    entry_details: {...state.entry_details,
      allIds: state.entry_details.allIds.filter(item => item != id),
      byId: {...state.entry_details.byId,
        id: undefined
      }
    }
  }
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