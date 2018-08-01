import { fromJS } from 'immutable'
import { expect } from 'chai'

import reducer from './guesses'
import { Guess } from '../testing/factories'

describe('reducer - Guesses', () => {
  let guess

  let action
  let initialState
  let nextState

  beforeEach(() => {
    guess = Guess.build({ correctLetters: 2, correctPlacement: 1 })
  })

  it('handles SET_GUESSES', () => {
    initialState = fromJS([])
    const guesses = fromJS([Guess.build(), Guess.build(), guess])

    action = {
      type: 'SET_GUESSES',
      guesses,
    }
    nextState = reducer(initialState, action)

    expect(nextState).to.deep.equal(guesses)
  })

  it('handles ADD_GUESS', () => {
    initialState = fromJS([Guess.build(), Guess.build()])

    action = {
      type: 'ADD_GUESS',
      guess,
      correctLetters: guess.get('correctLetters'),
      correctPlacement: guess.get('correctPlacement')
    }
    nextState = reducer(initialState, action)

    expect(nextState).to.deep.equal(initialState.push(guess))
  })
})
