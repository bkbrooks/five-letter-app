import { fromJS } from 'immutable'

const initialState = fromJS([])

function setGuesses(state, guesses = initialState) {
  return state.mergeDeep(guesses)
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'SET_GUESSES':
      return setGuesses(state, action.guesses)
    default:
      return state
  }
}
