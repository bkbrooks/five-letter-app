import { expect } from 'chai'
import axios from 'axios'
import mockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { fromJS } from 'immutable'

import {
  addGuess,
  makeGuess,
  setGuesses,
} from './guess'

import {
  Game,
  Guess,
} from '../testing/factories'

const mockStore = configureMockStore([thunk])
const mock = new mockAdapter(axios)

describe('actions - guess:', () => {
  let store

  beforeEach(() => {
    store = mockStore({})
  })

  afterEach(() => {
    mock.reset()
  })

  describe('setGuesses', () => {
    let guesses

    beforeEach(() => {
      guesses = fromJS([Guess.build(), Guess.build()]).toJS()
    })

    it('sets the guesses array', () => {
      const setGuessesAction = {
        type: 'SET_GUESSES',
        guesses
      }

      expect(setGuesses(guesses)).to.deep.equal(setGuessesAction)
    })
  })

  describe('addGuess', () => {
    let guess

    beforeEach(() => {
      guess = Guess.build().toJS()
    })

    it('adds a guess', () => {
      const addGuessAction = {
        type: 'ADD_GUESS',
        guess
      }

      expect(addGuess(guess)).to.deep.equal(addGuessAction)
    })
  })

  describe('makeGuess', () => {
    describe('successful requests', () => {
      it('posts new guess', () => {
        const game = Game.build()
        const guess = Guess.build()

        const fetchStarted = { type: 'FETCH_STARTED' }
        const fetchSuccess = { type: 'FETCH_SUCCESS' }

        const correctLetters = 2
        const correctPlacement = 1

        mock.onPost(`${process.env.REACT_APP_API_URI}/games/${game.get('id')}/make_guess`, {
          text: guess.get('text')
        }).reply(200, {
          id: guess.get('id'),
          text: guess.get('text'),
          correct_letters: correctLetters,
          correct_placement: correctPlacement,
        })

        const responseGuess = fromJS({
          id: guess.get('id'),
          text: guess.get('text'),
          correctLetters,
          correctPlacement,
        })

        const expectedActions = [
          fetchStarted,
          addGuess(responseGuess),
          fetchSuccess,
        ]

        return store.dispatch(makeGuess(game, guess))
          .then(() => expect(store.getActions()).to.deep.equal(expectedActions))
      })
    })
  })
})
