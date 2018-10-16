import {combineReducers} from 'redux'

function byId(state=null, action) {
  console.log(state)
  console.log(action)
  switch (action.type) {
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

export default combineReducers({byId: byId, allIds: allIds})
