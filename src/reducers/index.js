import { combineReducers } from 'redux'
import tableReducer from './tables'
import tableEntryReducer from './table_entries'
import entryDetailReducer from './entry_details'
import tagReducer from './tags'

export default combineReducers({
  tables: tableReducer,
  table_entries: tableEntryReducer,
  entry_details: entryDetailReducer,
  tags: tagReducer
})