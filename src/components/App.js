import React, { Component } from 'react';
import PropTypes from 'prop-types'

import CurrentGame from './CurrentGame'

class App extends Component {
  componentDidMount() {
    const {
      startNewGame
    } = this.props

    startNewGame()
  }

  render() {
    return (
      <div className="app">
        <CurrentGame {...this.props} />
      </div>
    )
  }
}

App.propTypes = {
  startNewGame: PropTypes.func.isRequired,
}

export default App
