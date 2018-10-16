const uuidv4 = require('uuid/v4');

/* action types */

export const ADD_BOOK = 'ADD_BOOK'
export const DELETE_BOOK = 'DELETE_BOOK'
export const UPDATE_BOOK = 'UPDATE_BOOK'

/* other constants */

/* action creators */

export function deleteBook(book) {
  return {type: DELETE_BOOK, payload: {book: book}}
}

export function updateBook(book, prevBook) {
  return {
    type: UPDATE_BOOK, 
    payload: {
      book: book,
      prevBook: prevBook
    }
  }
}
