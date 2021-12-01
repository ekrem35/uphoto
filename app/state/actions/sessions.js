import { CREATE_SESSION, EDIT_SESSION, SAVE_IMAGE } from '../actionTypes'
import moment from 'moment'

export const saveImage = (imagePath: String) => {
  return {
    type: SAVE_IMAGE,
    payload: imagePath
  }
}

export const createSession = (images) => {
  const now = moment()
  return {
    type: CREATE_SESSION,
    payload: {
      dateTime: now.unix(),
      images
    }
  }
}

export const editSession = (images, sessionId) => ({
  type: EDIT_SESSION,
  payload: {
    images,
    sessionId
  }
})
