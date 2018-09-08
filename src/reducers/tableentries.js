import { combineReducers } from 'redux'
import { ADD_HEX, UPDATE_HEX_TAGS, UPDATE_HEX_COORDINATES } from '../actions/hexes'

function byIdAddHex(state, action) {
  return ({
    ...state,
    [action.payload.newCoordinates] : {
      id: action.payload.newCoordinates,
      text: action.payload.newCoordinates,
      addTags: [action.payload.newTerrain, action.payload.newTerritory],
    }
  })
}

function byId(state=null, action) {
  console.log(state)
  console.log(action)
  switch (action.type) {
    case ADD_HEX:
      return byIdAddHex(state, action)

    case UPDATE_HEX_TAGS:
      return ({
        ...state,
        [action.payload.coordinates] : {
          addTags: [action.payload.newTerrain, action.payload.newTerritory],
        }
      })

    case UPDATE_HEX_COORDINATES:
      return ({
        ...state,
        [action.payload.newCoordinates] : {
          ...state[action.payload.oldCoordinates], //copy info to the new coordinates
          id: action.payload.newCoordinates,
          text: action.payload.newCoordinates
        },
        [action.payload.oldCoordinates] : null //delete the old coordinates
      })

    default:
      return state
  }
}

function allIds(state=null, action) {
  console.log(state)
  console.log(action)
  switch (action.type) {
    case ADD_HEX:
      return [...state.filter(item => item != action.payload.newCoordinates), action.payload.newCoordinates]

    case UPDATE_HEX_COORDINATES:
      return ([
        ...state.filter(item => (item != action.payload.oldCoordinates && item != action.payload.newCoordinates)),
        action.payload.newCoordinates
      ])

    default:
      return state
  }
}

export default combineReducers({byId: byId, allIds: allIds})