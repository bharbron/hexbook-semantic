import {getFullTemplateById} from './templates'

export getBooks(state) {
  return state.entities.books.allIds.map(id => getFullBookById(state, id)).sort(compareBooks)
}

export getByIdBooks(state) {
  const booksById = {}
  state.entities.books.allIds.forEach(
    id => {
      const book = getFullBookById(state, id)
      if (book) {
        bookById[id] = book
      }
    }
  )
  return booksById
}

export getByNameBooks(state) {
  const booksByName = {}
  state.entities.books.allIds.forEach(
    id => {
      const book = getFullBookById(state, id)
      if (book) {
        booksByName[book.name] = book
      }
    }
  )
  return booksByName
}

export function getBookById(state, id) {
  return {...state.entities.book.byId[id]}
}

export function getFullBookById(state, id) {
  const book = getBookById(state, id)
  if (book && book.templates) {
    book.templates = book.templates.map(templateId => getFullTemplateById(state, templateId))
  }
  return book
}

function compareBooks(a, b) {
  /*
  For sorting an array of books by their names
  */
  if (a.name < b.name) {
    return -1
  }
  if (a.name > b.name) {
    return 1
  }
  return 0
}