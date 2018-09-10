import store from '../store/store'

const uuidv4 = require('uuid/v4');

/* action types */

export const ADD_HEX_DEFINITION = 'ADD_HEX_DEFINITION'
export const DELETE_HEX_DEFINITION = 'DELETE_HEX_DEFINITION'
export const ADD_HEX = 'ADD_HEX'
export const UPDATE_HEX_TAGS = 'UPDATE_HEX_TAGS'

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
  console.log(`newEntryDetailText: ${newEntryDetailText}`)
  return { type: ADD_HEX_DEFINITION, payload: {'newEntryDetailText': newEntryDetailText, 'newEntryDetailId': uuidv4()} }
}

export function deleteHexDefinition(entryDetailId) {
  return { type: DELETE_HEX_DEFINITION, payload: {'entryDetailId': entryDetailId} }
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
