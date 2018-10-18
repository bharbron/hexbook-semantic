import {combineReducers} from 'redux'
import {arrayWithPush} from './helpers'
import {ADD_BOOK, DELETE_BOOK, UPDATE_BOOK} from '../actions/books'

function byId(state=null, action) {
  console.log(state)
  console.log(action)
  switch (action.type) {
    case ADD_BOOK: return byIdAddBook(state, action)
    case UPDATE_BOOK: return byIdUpdateBook(state, action)
    default: return state
  }
}

function allIds(state=null, action) {
  console.log(state)
  console.log(action)
  switch (action.type) {
    case ADD_BOOK: return allIdsAddBook(state, action)
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

function byIdAddBook(state, action) {
  return {
    ...state,
    [action.payload.id]: {
      id: action.payload.id,
      name: action.payload.name,
      size: action.payload.size,
      templates: [],
    }
  }
}

function allIdsAddBook(state, action) {
  return arrayWithPush(state, action.payload.id)
}

export default combineReducers({byId: byId, allIds: allIds})
