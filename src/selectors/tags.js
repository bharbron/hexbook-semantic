import {COLORS} from '../constants/colors'

function getTerrainTags(tags) { 
  return tags.allIds.filter(id => id && tags.byId[id].terrainHexes.length > 0 ).sort()
};

function getTerritoryTags(tags) {
  return tags.allIds.filter(id => id && tags.byId[id].territoryHexes.length > 0 ).sort()
};

function getOtherTags(tags) {
  return tags.allIds.filter(id => id && tags.byId[id].terrainHexes.length <= 0 && tags.byId[id].territoryHexes.length <= 0 ).sort()
};

function getByTagColors(tags) {
  const colorsByTag = {}
  tags.allIds.map(
    id => {
      colorsByTag[id] = COLORS.OTHER_TAG
      if (tags.byId[id].territoryHexes.length > 0) {
        colorsByTag[id] = COLORS.TERRITORY_TAG
      }
      if (tags.byId[id].terrainHexes.length >0) {
        colorsByTag[id] = COLORS.TERRAIN_TAG
      }
      return true
    }
  )
  return colorsByTag
};

export {getTerrainTags, getTerritoryTags, getOtherTags, getByTagColors}