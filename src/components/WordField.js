import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { fromJS } from 'immutable'

class WordField extends Component {
  constructor(props) {
    super(props)

    this.state = {
      guessText: ''
    }

    this.changeGuess = this.changeGuess.bind(this)
    this.submitGuess = this.submitGuess.bind(this)
  }

  changeGuess(e) {
    this.setState({ guessText: e.target.value })
  }

  submitGuess(e) {
    if (e) e.preventDefault()

    const {
      makeGuess,
    } = this.props

    makeGuess(fromJS({ text: this.state.guessText }))

    this.setState({ guessText: '' })
  }

  render() {
    return (
      <form className="word-field" onSubmit={this.submitGuess}>
        <input type="text" value={this.state.guessText} onChange={this.changeGuess} />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

WordField.propTypes = {
  game: PropTypes.object.isRequired,
  makeGuess: PropTypes.func.isRequired,
}

export default WordField
