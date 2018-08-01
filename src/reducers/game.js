import { fromJS } from 'immutable'

const initialState = fromJS({ })

function setGame(state, game = initialState) {
  return state.mergeDeep(game)
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'SET_GAME':
      return setGame(state, action.game)
    default:
      return state
  }
}
