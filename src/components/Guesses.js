import React from 'react'
import PropTypes from 'prop-types'

const Guesses = (props) => {
  const {
    guesses,
  } = props

  const drawResult = (guess) => {
    if (guess.get('wordExists')) {
      return <span className="result number">{guess.get('correctLetters')}</span>
    }

    return <span className="result error">x</span>
  }

  const drawGuess = (guess) => (
    <li className="guess" key={guess.get('id')}>
      <span className="word">{guess.get('text')}</span>
      {drawResult(guess)}
    </li>
  )

  return (
    <ul className="guesses">
      {guesses.map(g => drawGuess(g))}      
    </ul>
  )
}

Guesses.propTypes = {
  guesses: PropTypes.object.isRequired,
}

export default Guesses
