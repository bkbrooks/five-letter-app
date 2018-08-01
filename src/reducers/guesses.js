import { fromJS } from 'immutable'

const initialState = fromJS([])

function setGuesses(state, guesses = initialState) {
  return guesses
}

function addGuess(state, guess, correctLetters, correctPlacement) {
  return state.push(
    guess.set('correctLetters', correctLetters).set('correctPlacement', correctPlacement)
  )
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'SET_GUESSES':
      return setGuesses(state, action.guesses)
    case 'ADD_GUESS':
      return addGuess(state, action.guess, action.correctLetters, action.correctPlacement)
    default:
      return state
  }
}
