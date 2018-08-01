import { fromJS } from 'immutable'
import { parseResponse, apiNoAuth } from '../utils/api'
import {
  fetchStarted,
  fetchSuccess,
  fetchError
} from './game'

export const setGuesses = (guesses) => (
  {
    type: 'SET_GUESSES',
    guesses
  }
)

export const addGuess = (guess, correctLetters, correctPlacement) => (
  {
    type: 'ADD_GUESS',
    guess,
    correctLetters,
    correctPlacement
  }
)

export function makeGuess(game, guess) {
  return (dispatch) => {
    dispatch(fetchStarted())

    return apiNoAuth.post(`/games/${game.get('id')}/make_guess`, { text: guess.get('text') })
      .then(parseResponse)
      .then(response => {
        const result = response.data

        dispatch(addGuess(guess, result.correct_letters, result.correct_placement))

        dispatch(fetchSuccess())

        return response
      })
  }
}
