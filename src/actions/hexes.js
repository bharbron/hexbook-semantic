const uuidv4 = require('uuid/v4');

/* action types */

export const ADD_HEX_DEFINITION = 'ADD_HEX_DEFINITION'
export const DELETE_HEX_DEFINITION = 'DELETE_HEX_DEFINITION'
export const ADD_HEX = 'ADD_HEX'
export const UPDATE_HEX = 'UPDATE_HEX'
export const DELETE_HEX = 'DELETE_HEX'

/* other constants */

/* Example from official Redux docs https://redux.js.org/basics/actions#source-code
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
*/

/* action creators */

export function addHexDefinition(newEntryDetailText) {
  return { type: ADD_HEX_DEFINITION, payload: {'newEntryDetailText': newEntryDetailText, 'newEntryDetailId': uuidv4()} }
}

export function deleteHexDefinition(entryDetail) {
  return { type: DELETE_HEX_DEFINITION, payload: {'entryDetail': entryDetail} }
}

export function addHex(coordinates, terrain, territory) {
  /*
  :param coordinates: coordinates (tableEntry ID) of the new hex
  :param terrain: terrain tag ID of the new hex
  :param territory: territory tag ID of the new hex
  */
  return { type: ADD_HEX, payload: {
    'coordinates': coordinates, 
    'terrain': terrain, 
    'territory': territory,
  } }
}

export function updateHex(hex, prevHex) {
  /*
  :param hex: "full" hex definition of the new hex (see hex selector for schema)
  :param prevHex: "ful" hex definition of the hex that is being updated
  */
  return {type: UPDATE_HEX, payload: {hex: hex, prevHex: prevHex}}
}

export function deleteHex(hex) {
  /*
  :param hex: "full" tableEntry object of the hex to delete
  */
  return {type: DELETE_HEX, payload: {hex: hex}}
}
