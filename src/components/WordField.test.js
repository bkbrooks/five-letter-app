import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { fromJS } from 'immutable'

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
      game
    }

    wrapper = shallow(<WordField {...props} />)
  })

  it('renders an input field', () => {
    expect(wrapper.find('input')).to.have.length(1)
  })
})
