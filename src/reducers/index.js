import { combineReducers } from 'redux'
import tablesReducer from './tables'
import tableEntriesReducer from './tableentries'
import entryDetailsGroupsReducer from './entrydetailsgroups'
import entryDetailsReducer from './entrydetails'
import tagsReducer from './tags'
import tagWeightsReducer from './tagweights'

const entitiesReducer = combineReducers({
  tables: tablesReducer,
  tableEntries: tableEntriesReducer,
  entryDetailsGroups: entryDetailsGroupsReducer,
  entryDetails: entryDetailsReducer,
  tags: tagsReducer,
  tagWeights: tagWeightsReducer,
})

export default combineReducers({
  entities: entitiesReducer,
})