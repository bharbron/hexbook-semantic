import {combineReducers} from 'redux'
import {ADD_BOOK, DELETE_BOOK, UPDATE_BOOK} from '../actions/books'

function byId(state=null, action) {
  console.log(state)
  console.log(action)
  switch (action.type) {
    case UPDATE_BOOK: return byIdUpdateBook(state, action)
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

function byIdUpdateBook(state, action) {
  const book = action.payload.book
  return {
    ...state,
    [book.id]: {
      id: book.id,
      name: book.name,
      size: book.size,
      templates: book.templates.map(template => template.id),
    }
  }
}

export default combineReducers({byId: byId, allIds: allIds})
