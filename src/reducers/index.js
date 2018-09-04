import { combineReducers } from 'redux'
import tableReducer from './tables'
import entryDetailReducer from './entry_details'

export default combineReducers({tables: tableReducer, entry_details: entryDetailReducer})