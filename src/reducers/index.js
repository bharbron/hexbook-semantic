import { combineReducers } from 'redux'
import tablesReducer from './tables'
import tableEntriesReducer from './tableentries'
import entryDetailsGroupsReducer from './entrydetailsgroups'
import entryDetailsReducer from './entrydetails'
import tagsReducer from './tags'
import tagWeightsReducer from './tagweights'
import templatesReducer from './templates'
import booksReducer from './books'
import templatePluginsReducer from './templateplugins'

const entitiesReducer = combineReducers({
  tables: tablesReducer,
  tableEntries: tableEntriesReducer,
  entryDetailsGroups: entryDetailsGroupsReducer,
  entryDetails: entryDetailsReducer,
  tags: tagsReducer,
  tagWeights: tagWeightsReducer,
  templates: templatesReducer,
  books: booksReducer,
})

const uiReducer = combineReducers({
  templatePlugins: templatePluginsReducer,
})

export default combineReducers({
  entities: entitiesReducer,
  ui: uiReducer
})