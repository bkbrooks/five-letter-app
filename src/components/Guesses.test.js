import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { fromJS } from 'immutable'

import Guesses from './Guesses'
import {
  Game,
  Guess,
} from '../testing/factories'

describe('<Guesses> component', () => {
  let props
  let wrapper

  beforeEach(() => {
    const game = Game.build()
    const guesses = fromJS([Guess.build(), Guess.build()])
    props = {
      game,
      guesses,
    }

    wrapper = shallow(<Guesses {...props} />)
  })

  it('renders a guesses wrapper', () => {
    expect(wrapper.find('.guesses')).to.have.length(1)
  })

  it('renders a guess for each guess in list', () => {
    expect(wrapper.find('li.guess')).to.have.length(2)
  })
})
