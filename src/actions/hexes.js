const uuidv4 = require('uuid/v4');

/* action types */

export const ADD_HEX_DETAIL = 'ADD_HEX_DETAIL'
export const DELETE_HEX_DETAIL = 'DELETE_HEX_DETAIL'
export const ADD_HEX = 'ADD_HEX'
export const UPDATE_HEX_TAGS = 'UPDATE_HEX_TAGS'
export const UPDATE_HEX_COORDINATES = 'UPDATE_HEX_COORDINATES'

/* other constants */

/* Example from official Redux docs https://redux.js.org/basics/actions#source-code
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
*/

/* action creators */

export function addHexDetail(newEntryDetailText) {
  return { type: ADD_HEX_DETAIL, payload: {'newEntryDetailText': newEntryDetailText, 'newEntryDetailId': uuidv4()} }
}

export function deleteHexDetail(entryDetailId) {
  return { type: DELETE_HEX_DETAIL, payload: {'entryDetailId': entryDetailId} }
}

export function addHex(newCoordinates, newTerrain, newTerritory, replaceHex, replaceTerritoryTag, replaceTerrainTag) {
  /*
  :param newCoordinates: coordinates (tableEntry ID) of the new hex
  :param newTerrain: terrain tag ID of the new hex
  :param newTerritory: territory tag ID of the new hex
  :param replaceHex: existing hex tableEntry (if any) at the same coordinates that will be overwritten
  */
  return { type: ADD_HEX, payload: {
    'newCoordinates': newCoordinates, 
    'newTerrain': newTerrain, 
    'newTerritory': newTerritory, 
    'replaceHex': replaceHex,
    'replaceTerritoryTag': replaceTerritoryTag,
    'replaceTerrainTag': replaceTerrainTag
  } }
}

export function updateHexTags(coordinates, newTerrain, newTerritory, oldTerrainTag, oldTerritoryTag) {
  /*
  :param coordinate: coordinates (tableEntry ID) of the hex we're updating tags on
  :param newTerrain: new terrain tag ID of the hex
  :param newTerritory: new territory tag ID of the hex
  :param oldTerrainTag: full Tag object of the old terrain for hex
  :param oldTerritoryTag: full Tag object of the old territory for hex
  */
  return { type: UPDATE_HEX_TAGS, payload: {
    'coordinates': coordinates, 
    'newTerrain': newTerrain, 
    'newTerritory': newTerritory,
    'oldTerrainTag': oldTerrainTag,
    'oldTerritoryTag': oldTerritoryTag,
  } }
}

export function updateHexCoordinates(oldCoordinates, newCoordinates) {
  return { type: UPDATE_HEX_COORDINATES, payload: {'oldCoordinates': oldCoordinates, 'newCoordinates': newCoordinates} }
}