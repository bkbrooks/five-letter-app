import { fromJS } from 'immutable'
import { expect } from 'chai'

import reducer from './game'
import { Game } from '../testing/factories'

describe('reducer - Game', () => {
  let game

  let action
  let initialState
  let nextState

  beforeEach(() => {
    game = Game.build()
  })

  it('handles SET_GAME', () => {
    initialState = fromJS({})
    action = {
      type: 'SET_GAME',
      game,
    }
    nextState = reducer(initialState, action)

    expect(nextState).to.deep.equal(game)
  })
})
