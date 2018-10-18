import {COLORS} from '../constants/colors'

function getTerrainTags(state) { 
  return state.entities.tags.allIds.filter(id => id && state.entities.tags.byId[id].terrainHexes.length > 0 ).sort()
};

function getTerritoryTags(state) {
  return state.entities.tags.allIds.filter(id => id && state.entities.tags.byId[id].territoryHexes.length > 0 ).sort()
};

function getOtherTags(state) {
  return state.entities.tags.allIds.filter(id => id && state.entities.tags.byId[id].terrainHexes.length <= 0 && state.entities.tags.byId[id].territoryHexes.length <= 0 ).sort()
};

function getByTagColors(state) {
  const colorsByTag = {}
  state.entities.tags.allIds.forEach(
    id => {
      colorsByTag[id] = COLORS.OTHER_TAG
      if (state.entities.tags.byId[id].territoryHexes.length > 0) {
        colorsByTag[id] = COLORS.TERRITORY_TAG
      }
      if (state.entities.tags.byId[id].terrainHexes.length >0) {
        colorsByTag[id] = COLORS.TERRAIN_TAG
      }
    }
  )
  return colorsByTag
};

function getAllTagIds(state) {
  return [...state.entities.tags.allIds]
}

export {getTerrainTags, getTerritoryTags, getOtherTags, getByTagColors, getAllTagIds}