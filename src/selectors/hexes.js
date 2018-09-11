function getHexes(state) { 
  const hexes = []
  for (let i = 0; i < state.entities.tables.byId['HEX'].entries.length; i++) {
    const tableEntriesId = state.entities.tables.byId['HEX'].entries[i]
    hexes.push({coordinates: tableEntriesId, 
      terrain: state.entities.tableEntries.byId[tableEntriesId].addTags[0], 
      territory: state.entities.tableEntries.byId[tableEntriesId].addTags[1]
    })
  }
  return hexes
};

function getHexDefinitions(state) {
  const hexDefinitions = []
  for (let i = 0; i < state.entities.entryDetailsGroups.byId['HEX'].entryDetails.length; i++) {
    const entryDetailsId = state.entities.entryDetailsGroups.byId['HEX'].entryDetails[i]
    hexDefinitions.push({id: entryDetailsId, text: state.entities.entryDetails.byId[entryDetailsId].text})
  }
  return hexDefinitions
};

export {getHexes, getHexDefinitions}