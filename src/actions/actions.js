/*
* action types
 */

export const CHANGE_PAGE = 'CHANGE_PAGE'
export const ADD_HEX_DETAIL = 'ADD_HEX_DETAIL'
export const DELETE_HEX_DETAIL = 'DELETE_HEX_DETAIL'

/*
 * other constants
 */

/* Example from official Redux docs https://redux.js.org/basics/actions#source-code
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
*/

/*
 * action creators
 */

export function changePage(url) {
  return { type: CHANGE_PAGE, url }
}

export function addHexDetail(text) {
  return { type: ADD_HEX_DETAIL, text }
}

export function deleteHexDetail(id) {
  return { type: DELETE_HEX_DETAIL, id }
}