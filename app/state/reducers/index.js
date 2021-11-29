import { combineReducers } from 'redux'
import storage from './storage'
import sessions from './sessions'

export default combineReducers({
  storage,
  sessions
})
