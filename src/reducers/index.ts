import { combineReducers } from 'redux'
import counter from './counter'
import firstClass from './firstClass'
import carefullyChosen from './carefullyChosen'

export default combineReducers({
  counter,
  firstClass,
  carefullyChosen
})
