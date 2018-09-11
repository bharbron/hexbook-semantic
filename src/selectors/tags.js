function getTerrainTags(tags) { 
  return tags.allIds.filter(id => tags.byId[id].terrainHexes.length > 0 ).sort()
};

function getTerritoryTags(tags) {
  return tags.allIds.filter(id => tags.byId[id].territoryHexes.length > 0 ).sort()
};

function getOtherTags(tags) {
  return tags.allIds.filter(id => tags.byId[id].terrainHexes.length <= 0 && tags.byId[id].territoryHexes.length <= 0 ).sort()
};

export {getTerrainTags, getTerritoryTags, getOtherTags}