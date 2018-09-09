import store from '../store/store'

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
  console.log(`newEntryDetailText: ${newEntryDetailText}`)
  return { type: ADD_HEX_DETAIL, payload: {'newEntryDetailText': newEntryDetailText, 'newEntryDetailId': uuidv4()} }
}

export function deleteHexDetail(entryDetailId) {
  return { type: DELETE_HEX_DETAIL, payload: {'entryDetailId': entryDetailId} }
}

export function addHex(newCoordinates, newTerrain, newTerritory) {
  /*
  :param newCoordinates: coordinates (tableEntry ID) of the new hex
  :param newTerrain: terrain tag ID of the new hex
  :param newTerritory: territory tag ID of the new hex
  */
  const state = store.getState()
  const tables = state.entities.tables
  const tableEntries = state.entities.tableEntries
  const tags = state.entities.tags
  const entryDetailsGroups = state.entities.entryDetailsGroups

  // Are we overwriting an existing hex?
  const replaceHex = (tables.byId['HEX'].entries.includes(newCoordinates)) ? tableEntries.byId[newCoordinates] : undefined
  // Does that hex have existing tags?
  const replaceTerrainTag = (replaceHex && replaceHex.addTags[0]) ? tags.byId[replaceHex.addTags[0]] : undefined
  const replaceTerritoryTag = (replaceHex && replaceHex.addTags[1]) ? tags.byId[replaceHex.addTags[1]] : undefined
  // Does that hex have any non-default entryDetails?
  const replaceEntryDetailsGroupId = (replaceHex && replaceHex.entryDetailsGroup) ? 
    replaceHex.entryDetailsGroup : 
    undefined;
  const replaceEntryDetailsIds = (replaceEntryDetailsGroupId) ?
    entryDetailsGroups.byId[replaceEntryDetailsGroupId].entryDetails :
    [];

  return { type: ADD_HEX, payload: {
    'newCoordinates': newCoordinates, 
    'newTerrain': newTerrain, 
    'newTerritory': newTerritory, 
    'replaceHex': replaceHex,
    'replaceTerrainTag': replaceTerrainTag,
    'replaceTerritoryTag': replaceTerritoryTag,
    'replaceEntryDetailsGroupId': replaceEntryDetailsGroupId,
    'replaceEntryDetailsIds': replaceEntryDetailsIds,
  } }
}

export function updateHexTags(coordinates, newTerrain, newTerritory) {
  /*
  :param coordinate: coordinates (tableEntry ID) of the hex we're updating tags on
  :param newTerrain: new terrain tag ID of the hex
  :param newTerritory: new territory tag ID of the hex
  :param oldTerrainTag: full Tag object of the old terrain for hex
  :param oldTerritoryTag: full Tag object of the old territory for hex
  */
  const state = store.getState()
  const tableEntries = state.entities.tableEntries
  const tags = state.entities.tags

  const hex = tableEntries.byId[coordinates]

  //What are the old tags we're replacing?
  const oldTerrainTag = (hex.addTags[0]) ? tags.byId[hex.addTags[0]] : undefined
  const oldTerritoryTag = (hex.addTags[1]) ? tags.byId[hex.addTags[1]] : undefined

  return { type: UPDATE_HEX_TAGS, payload: {
    'coordinates': coordinates, 
    'newTerrain': newTerrain, 
    'newTerritory': newTerritory,
    'oldTerrainTag': oldTerrainTag,
    'oldTerritoryTag': oldTerritoryTag,
  } }
}

export function updateHexCoordinates(newCoordinates, oldCoordinates) {
  /*
  :param newCoordinates: new coordinates (tableEntry ID) for the new hex
  :param oldHex: full tableEntry object of the hexes previous state
  :param replaceHex: existing hex tableEntry (if any) at the same coordinates that will be overwritten
  :param replaceTerrainTag: existing full Tag object assinged to replaceHex.addTags[0]
  :param replaceTerritoryTag: existing full Tag object assinged to replaceHex.addTags[1]
  */
  const state = store.getState()
  const tables = state.entities.tables
  const tableEntries = state.entities.tableEntries
  const tags = state.entities.tags
  const entryDetailsGroups = state.entities.entryDetailsGroups

  const oldHex = tableEntries.byId[oldCoordinates]

  // Are we overwriting an existing hex?
  const replaceHex = (tables.byId['HEX'].entries.includes(newCoordinates)) ? tableEntries.byId[newCoordinates] : undefined
  // Does that hex have existing tags?
  const replaceTerrainTag = (replaceHex && replaceHex.addTags[0]) ? tags.byId[replaceHex.addTags[0]] : undefined
  const replaceTerritoryTag = (replaceHex && replaceHex.addTags[1]) ? tags.byId[replaceHex.addTags[1]] : undefined
  // Does that hex have any non-default entryDetails?
  const replaceEntryDetailsGroupId = (replaceHex && replaceHex.entryDetailsGroup) ? 
    replaceHex.entryDetailsGroup : 
    undefined;
  const replaceEntryDetailsIds = (replaceEntryDetailsGroupId) ?
    entryDetailsGroups.byId[replaceEntryDetailsGroupId].entryDetails :
    [];

  return { type: UPDATE_HEX_COORDINATES, payload: {
    'newCoordinates': newCoordinates, 
    'oldHex': oldHex,
    'replaceHex': replaceHex,
    'replaceTerrainTag': replaceTerrainTag,
    'replaceTerritoryTag': replaceTerritoryTag,
    'replaceEntryDetailsGroupId': replaceEntryDetailsGroupId,
    'replaceEntryDetailsIds': replaceEntryDetailsIds,
  } }
}