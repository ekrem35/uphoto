import { CREATE_SESSION, EDIT_SESSION } from '../actionTypes'

const initialState = []

export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_SESSION: {
      return [...state, ...[action.payload]]
    }
    case EDIT_SESSION: {
      const current = [...state]
      current[action.payload.sessionId].images = action.payload.images
      return [...current]
    }
    default:
      return state
  }
}
