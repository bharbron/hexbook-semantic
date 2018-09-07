/*
* action types
 */

export const ADD_OTHER_TAG = 'ADD_OTHER_TAG'
export const DELETE_OTHER_TAG = 'DELETE_OTHER_TAG'

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

export function addOtherTag(tag) {
  return { type: ADD_OTHER_TAG, payload: {'tag': tag} }
}

export function deleteOtherTag(tag) {
  return { type: DELETE_OTHER_TAG, payload: {'tag': tag} }
}
