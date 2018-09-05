import { combineReducers } from 'redux'
import tableReducer from './tables'
import tableEntryReducer from './tableentries'
import entryDetailReducer from './entrydetails'
import tagReducer from './tags'

export default combineReducers({
  tables: tableReducer,
  tableEntries: tableEntryReducer,
  entryDetails: entryDetailReducer,
  tags: tagReducer
})