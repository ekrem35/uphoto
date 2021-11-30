import { SAVE_IMAGE } from '../actionTypes'

export const saveImage = (imagePath: String) => {
  return {
    type: SAVE_IMAGE,
    payload: imagePath
  }
}

export const createSession = () => {}
