import { createStore, applyMiddleware, compose } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import {IndexPreview} from '../components/templateplugins'
import {UUID} from '../constants/uuid'
import rootReducer from '../reducers'

export const history = createHistory()

const initialState = {
  /* data state */
  entities: {
    tables: {
      byId: {
        'HEX': {
          id: 'HEX',
          code: 'HEX',
          name: 'Hex Map',
          description: 'Mapping of hex coordinates to terrain and territory',
          template: 'HEX',
          entries: [],
        }
      },
      allIds: ['HEX']
    },
    tableEntries: {
      byId: {},
      allIds: []
    },
    entryDetailsGroups: {
      byId: {
        'HEX': {
          id: 'HEX',
          entryDetails: []
        }
      },
      allIds: ['HEX']
    },
    entryDetails: {
      byId: {},
      allIds: []
    },
    tagWeights: {
      byId: {},
      allIds: []
    },
    tags: {
      byId: {},
      allIds: []
    },
    templates: {
      byId: {
        'HEX': {
          id: 'HEX',
          name: 'Hexes',
          description: 'Template for printing the index of hexes',
          table: 'HEX',
          pluginId: UUID.TEMPLATE_HEXES_PLUGIN_ID,
          properties: {
            'columns': '2',
            'whitespace': '4',
          },
          metadata: {
            'text': 'h1',
            'entryDetails': ['h3', 'p', 'h4', 'p'],
            'references': 'h2'
          }
        }
      },
      'allIds': ['HEX']
    },
  },

  /* UI state */
  ui: {
    templatePlugins: {
      byId: {
        [UUID.TEMPLATE_HEXES_PLUGIN_ID]: {
          id: UUID.TEMPLATE_HEXES_PLUGIN_ID,
          preview: IndexPreview,
          color: 'violet',
        },
      },
      allIds: [UUID.TEMPLATE_HEXES_PLUGIN_ID]
    }
  }
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