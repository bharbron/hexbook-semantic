import { combineReducers } from 'redux'
import { ADD_HEX_DETAIL, DELETE_HEX_DETAIL } from '../actions/hexes'

function byIdAddHexDetail(state, action) {
  return ({
    ...state,
    [action.payload.newEntryDetailId]: {id: action.payload.newEntryDetailId, text: action.payload.newEntryDetailText}
  })
}

function byIdDeleteHexDetail(state, action) {
  return ({
    ...state,
    [action.payload.entryDetailId]: undefined
  })
}

function byId(state=null, action) {
  console.log(state)
  console.log(action)
  switch (action.type) {
    case ADD_HEX_DETAIL:
      return byIdAddHexDetail(state, action)

    case DELETE_HEX_DETAIL:
      return byIdDeleteHexDetail(state, action)

    default:
      return state
  }
}

function allIdsAddHexDetail(state, action) {
  return ([
    ...state,
    action.payload.entryDetailId
  ])
}

function allIdsDeleteHexDetail(state, action) {
  return state.filter(item => item !== action.payload.entryDetailId)
}

function allIds(state=null, action) {
  console.log(state)
  console.log(action)
  switch (action.type) {
    case ADD_HEX_DETAIL:
      return allIdsAddHexDetail(state, action)

    case DELETE_HEX_DETAIL:
      return allIdsDeleteHexDetail(state, action)

    default:
      return state
  }
}

export default combineReducers({byId: byId, allIds: allIds})
