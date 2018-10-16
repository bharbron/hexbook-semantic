import {getFullTemplateById} from './templates'

export function getBooks(state) {
  const books = []
  state.entities.books.allIds.forEach(
    id => {
      const book = getFullBookById(state, id)
      if (book) {
        books.push(book)
      }
    }
  )
  return books.sort(compareBooks)
}

export function getByIdBooks(state) {
  const booksById = {}
  state.entities.books.allIds.forEach(
    id => {
      const book = getFullBookById(state, id)
      if (book) {
        booksById[id] = book
      }
    }
  )
  return booksById
}

export function getByNameBooks(state) {
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
  return {...state.entities.books.byId[id]}
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