import { fromJS } from 'immutable'

const initialState = fromJS([])

function setGuesses(state, guesses = initialState) {
  return guesses
}

function addGuess(state, guess) {
  return state.push(guess)
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'SET_GUESSES':
      return setGuesses(state, action.guesses)
    case 'ADD_GUESS':
      return addGuess(state, action.guess)
    default:
      return state
  }
}
