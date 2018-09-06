function hexesDataArray(tables, tableEntries, tags) {
  //THIS FUNCTION MUST BE IMMUTABLE!!
  const rows = []
  for (var i = 0; i < tables.byId['HEX'].entries.length; i++) {
    const coordinates = tables.byId['HEX'].entries[i]
    const terrain = tableEntries.byId[coordinates].addTags[0]
    const territory = tableEntries.byId[coordinates].addTags[1]
    const override = ''
    rows.push([coordinates, terrain, territory, override])
  }
  return rows
}

export { hexesDataArray }