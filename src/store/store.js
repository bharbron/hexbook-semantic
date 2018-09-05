import { createStore, applyMiddleware, compose } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import rootReducer from '../reducers'

export const history = createHistory()

const initialState = {
  /* data state */
  tables: {
    byId: {
      "HEX": {
        id: "HEX",
        code: "HEX",
        name: "Hex Map",
        description: "Mapping of hex coordinates to terrain and territory",
        static_entries: false,
        generator: null,
        target_num: null,
        templates: ["Hexes"],
        entries: [],
        global_entry_details: []
      }
    },
    allIds: ["HEX"]
  },
  table_entries: {
    byId: {},
    allIds: []
  },
  entry_details: {
    byId: {},
    allIds: []
  },
  tag_weights: {
    byId: {},
    allIds: []
  },
  tags: {
    byId: {},
    allIds: []
  },
  templates: {
    byId: {
      "Hexes": {
        id: "Hexes",
        name: "Hexes",
        description: "Template for printing the list of hexes",
        table: "HEX",
        other_template_stuff: null
      }
    },
    "allIds": ["Hexes"]
  },

  /* UI state */
  ui: {}
}

const enhancers = []
const middleware = [
  thunk,
  routerMiddleware(history)
]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(
  connectRouter(history)(rootReducer),
  initialState,
  composedEnhancers
)

console.log(store.getState())

export default store