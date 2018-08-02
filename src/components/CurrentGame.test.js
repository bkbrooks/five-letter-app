import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { fromJS } from 'immutable'
import sinon from 'sinon'

import CurrentGame from './CurrentGame'
import {
  Game,
  Guess,
} from '../testing/factories'

describe('<CurrentGame> component', () => {
  let props
  let wrapper

  beforeEach(() => {
    const game = Game.build()
    const guesses = fromJS([Guess.build(), Guess.build()])
    props = {
      game,
      guesses,
      makeGuess: sinon.spy()
    }

    wrapper = shallow(<CurrentGame {...props} />)
  })

  it('renders a current-game wrapper', () => {
    expect(wrapper.find('.current-game')).to.have.length(1)
  })  

  it('renders a WordField component', () => {
    expect(wrapper.find('WordField')).to.have.length(1)
  })

  it('renders a Guesses component', () => {
    expect(wrapper.find('Guesses')).to.have.length(1)
  })
})
