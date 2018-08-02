import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { fromJS } from 'immutable'
import sinon from 'sinon'

import WordField from './WordField'
import {
  Game
} from '../testing/factories'

describe('<WordField> component', () => {
  let props
  let wrapper

  beforeEach(() => {
    const game = Game.build()
    props = {
      game,
      makeGuess: sinon.spy(),
    }

    wrapper = shallow(<WordField {...props} />)
  })

  it('renders an input field', () => {
    expect(wrapper.find('input')).to.have.length(1)
  })

  it('renders a submit button', () => {
    expect(wrapper.find('button')).to.have.length(1)
  })
})
