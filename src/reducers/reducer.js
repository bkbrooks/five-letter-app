import { combineReducers } from 'redux-immutable'

import game from './game'
import guesses from './guesses'

export default combineReducers({
  game,
  guesses,
})
