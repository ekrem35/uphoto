import { SAVE_IMAGE } from '../actionTypes'

const initialState = {
  images: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case SAVE_IMAGE:
      return {
        ...state,
        ...{ images: [...state.images, ...[action.payload]] }
      }
    default:
      return state
  }
}
