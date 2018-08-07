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

export const addGuess = (guess) => (
  {
    type: 'ADD_GUESS',
    guess
  }
)

export function makeGuess(game, guess) {
  return (dispatch) => {
    dispatch(fetchStarted())

    return apiNoAuth.post(`/games/${game.get('id')}/make_guess`, { text: guess.get('text') })
      .then(parseResponse)
      .then(response => {
        const result = response.data

        const responseGuess = fromJS({
          id: result.id,
          text: result.text,
          wordExists: result.word_exists,
          correctLetters: result.correct_letters,
          correctPlacement: result.correct_placement,
        })

        dispatch(addGuess(responseGuess))

        dispatch(fetchSuccess())

        return response
      })
      .catch(e => {
        dispatch(fetchError(e))
      })
  }
}
