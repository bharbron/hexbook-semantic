import { combineReducers } from 'redux'
import tableReducer from './tables'
import tableEntryReducer from './tableEntries'
import entryDetailReducer from './entryDetails'
import tagReducer from './tags'

export default combineReducers({
  tables: tableReducer,
  tableEntries: tableEntryReducer,
  entryDetails: entryDetailReducer,
  tags: tagReducer
})