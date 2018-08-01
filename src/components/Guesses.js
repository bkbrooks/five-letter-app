import React from 'react'
import PropTypes from 'prop-types'

const Guesses = (props) => {
  const {
    guesses,
  } = props

  const drawGuess = (guess) => (
    <li className="guess" key={guess.get('id')}>{guess.get('text')}</li>
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
