const uuidv4 = require('uuid/v4');

/*
* action types
 */

export const ADD_HEX_DETAIL = 'ADD_HEX_DETAIL'
export const DELETE_HEX_DETAIL = 'DELETE_HEX_DETAIL'
export const ADD_HEX = 'ADD_HEX'
export const UPDATE_HEX_TAGS = 'UPDATE_HEX_TAGS'
export const UPDATE_HEX_COORDINATES = 'UPDATE_HEX_COORDINATES'

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

export function addHexDetail(entryDetailText) {
  return { type: ADD_HEX_DETAIL, payload: {'entryDetailText': entryDetailText, 'entryDetailId': uuidv4()} }
}

export function deleteHexDetail(entryDetailId) {
  return { type: DELETE_HEX_DETAIL, payload: {'entryDetailId': entryDetailId} }
}

export function addHex(coordinates, terrain, territory) {
  return { type: ADD_HEX, payload: {'coordinates': coordinates, 'terrain': terrain, 'territory': territory} }
}

export function updateHexTags(coordinates, oldTerrain, oldTerritory, newTerrain, newTerritory) {
  return { type: UPDATE_HEX_TAGS, payload: {
    'coordinates': coordinates, 
    'oldTerrain': oldTerrain,
    'oldTerritory': oldTerritory,
    'newTerrain': newTerrain, 
    'newTerritory': newTerritory
  } }
}

export function updateHexCoordinates(oldCoordinates, newCoordinates) {
  return { type: UPDATE_HEX_COORDINATES, payload: {'oldCoordinates': oldCoordinates, 'newCoordinates': newCoordinates} }
}