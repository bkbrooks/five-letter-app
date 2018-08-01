import { expect } from 'chai'
import axios from 'axios'
import mockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { fromJS } from 'immutable'

import {
  setGame,
  startNewGame,
} from './game'

import {
  Game
} from '../testing/factories'

const mockStore = configureMockStore([thunk])
const mock = new mockAdapter(axios)

describe('actions - game:', () => {
  let store

  beforeEach(() => {
    store = mockStore({})
  })

  afterEach(() => {
    mock.reset()
  })

  describe('setGame', () => {
    let game

    beforeEach(() => {
      game = Game.build().toJS()
    })

    it('sets the game', () => {
      const setGameAction = {
        type: 'SET_GAME',
        game
      }

      expect(setGame(game)).to.deep.equal(setGameAction)
    })
  })

  describe('startNewGame', () => {
    describe('successful requests', () => {
      it('fetches new game', () => {
        const game = Game.build().toJS()

        const fetchStarted = { type: 'FETCH_STARTED' }
        const fetchSuccess = { type: 'FETCH_SUCCESS' }

        mock.onPost(`${process.env.REACT_APP_API_URI}/games`)
          .reply(201, game)

        const expectedActions = [
          fetchStarted,
          setGame(fromJS(game)),
          fetchSuccess,
        ]

        return store.dispatch(startNewGame())
          .then(() => expect(store.getActions()).to.deep.equal(expectedActions))

      })
    })
  })
})
