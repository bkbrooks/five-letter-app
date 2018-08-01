import { fromJS } from 'immutable'
import { parseResponse, apiNoAuth } from '../utils/api'

export const fetchStarted = () => (
  {
    type: 'FETCH_STARTED'
  }
)

export const fetchSuccess = () => (
  {
    type: 'FETCH_SUCCESS'
  }
)

export const fetchError = () => (
  {
    type: 'FETCH_ERROR'
  }
)

export const setGame = (game) => (
  {
    type: 'SET_GAME',
    game
  }
)

export function startNewGame() {
  return (dispatch) => {
    dispatch(fetchStarted())

    return apiNoAuth.post(`/games`)
      .then(parseResponse)
      .then(response => {
        const game = response.data

        dispatch(setGame(fromJS(game)))

        dispatch(fetchSuccess())

        return response
      })
  }
}
