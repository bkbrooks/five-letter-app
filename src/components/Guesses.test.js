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
    const guesses = fromJS([
      Guess.build({ correctLetters: 2 }),
      Guess.build({ correctLetters: 3 }),
      Guess.build({ wordExists: false }),
      Guess.build({ correctLetters: 1 }),
    ])

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
    expect(wrapper.find('li.guess')).to.have.length(4)
  })

  it('renders the text of the guess', () => {
    expect(wrapper.find('li.guess .word').at(0).text()).to.equal(props.guesses.get(0).get('text'))
  })

  it('renders the number of correct letters for result of a guess', () => {
    expect(wrapper.find('li.guess .result.number').at(0).text()).to.equal('2')
  })

  it('renders an .error and no .number if the word doesnt exist', () => {
    expect(wrapper.find('li.guess').at(2).find('.result.number')).to.have.length(0)
    expect(wrapper.find('li.guess').at(2).find('.result.error')).to.have.length(1)
  })
})
