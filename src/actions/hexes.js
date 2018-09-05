const uuidv4 = require('uuid/v4');

/*
* action types
 */

export const ADD_HEX_DETAIL = 'ADD_HEX_DETAIL'
export const DELETE_HEX_DETAIL = 'DELETE_HEX_DETAIL'
export const ADD_HEX = 'ADD_HEX'

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

export function addHexDetail(entry_detail_text) {
  return { type: ADD_HEX_DETAIL, payload: {'entry_detail_text': entry_detail_text, 'entry_detail_id': uuidv4() } }
}

export function deleteHexDetail(entry_detail_id) {
  return { type: DELETE_HEX_DETAIL, payload: {'entry_detail_id': entry_detail_id} }
}

export function addHex(hex_text) {
  //split into coordinate,terrain,territory
  const [coordinates, terrain, territory] = hex_text.split(',')
  return { type: ADD_HEX, payload: {'coordinates': coordinates, 'terrain': terrain, 'territory': territory}}
}