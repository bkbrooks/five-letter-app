import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { fromJS } from 'immutable'
import sinon from 'sinon'

import App from './App'
import {
  Game
} from '../testing/factories'

describe('<App> component', () => {
  let props
  let wrapper

  beforeEach(() => {
    const game = Game.build()
    props = {
      game,
      startNewGame: sinon.spy()
    }

    wrapper = shallow(<App {...props} />)
  })

  it('renders a CurrentGame component', () => {
    expect(wrapper.find('CurrentGame')).to.have.length(1)
  })
})
