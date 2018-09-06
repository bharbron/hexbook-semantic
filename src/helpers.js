function hexesDataArray(tables, tableEntries, tags, onSubmitTerrain, onSubmitTerritory) {
  //THIS FUNCTION MUST BE IMMUTABLE!!
  const rows = []
  for (var i = 0; i < tables.byId['HEX'].entries.length; i++) {
    const coordinates = tables.byId['HEX'].entries[i]
    const terrain = tableEntries.byId[coordinates].addTags[0]
    const territory = tableEntries.byId[coordinates].addTags[1]
    const override = ''
    rows.push([
      coordinates, 
      {content: terrain, onSubmit: (value) => onSubmitTerrain(coordinates, value)}, 
      {content: territory, onSubmit: (value) => onSubmitTerritory(coordinates, value)}, 
      override
    ])
  }
  return rows
}

export { hexesDataArray }