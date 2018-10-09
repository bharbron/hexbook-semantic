import {getFullEntryDetailById} from './entrydetails'

function getHexes(state) { 
  /*
  Return an array of "full" hexes
  */
  return state.entities.tables.byId['HEX'].entries.map(
    id => getFullHexById(state, id)
  )
}

function getByIdHexes(state) {
  /*
  Return a lookup object of "full" hexes
  */
  const hexesById = {}
  state.entities.tables.byId['HEX'].entries.map(
    id => {
      hexesById[id] = getFullHexById(state, id)
      return true
    }
  )
  return hexesById
}

function getFullHexById(state, id) {
  /*
  Return the "full" hex for the given ID, i.e. follow all realtionships and include
  the details of those related objects as well

  hex = {
    coordinates: <ID of the hex>,
    terrain: <text of the terrain tag>,
    territory: <text of the territory tag>,
    entryDetails: [
      <full entry detail #1>,
      <full entry details #2>,
      ...
    ]
  }
  */
  const hex = {...state.entities.tableEntries.byId[id]}
  hex['coordinates'] = id
  hex['terrain'] = hex.addTags[0]
  hex['territory'] = hex.addTags[1]
  // If the hex is using global hex definitions, i.e. the 'HEX' entryDetailsGroup, don't pull in any entryDetails
  if (hex.entryDetailsGroup && hex.entryDetailsGroup !== 'HEX') {
    const entryDetailsIds = state.entities.entryDetailsGroups.byId[hex.entryDetailsGroup].entryDetails
    if (entryDetailsIds) {
      hex['entryDetails'] = entryDetailsIds.map(id => getFullEntryDetailById(state, id))
    }
  }
  else {
    hex['entryDetails'] = []
  }
  return hex
}

function getHexDefinitions(state) {
  const hexDefinitions = []
  for (let i = 0; i < state.entities.entryDetailsGroups.byId['HEX'].entryDetails.length; i++) {
    const entryDetailsId = state.entities.entryDetailsGroups.byId['HEX'].entryDetails[i]
    hexDefinitions.push({id: entryDetailsId, text: state.entities.entryDetails.byId[entryDetailsId].text})
  }
  return hexDefinitions
};

export {getHexes, getByIdHexes, getHexDefinitions}