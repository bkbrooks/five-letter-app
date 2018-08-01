import React from 'react'
import PropTypes from 'prop-types'

import WordField from './WordField'
import Guesses from './Guesses'

const CurrentGame = (props) => {
  return (
    <div className="current-game">
      <WordField {...props} />
      <Guesses {...props} />
    </div>
  )
}

CurrentGame.propTypes = {
  game: PropTypes.object.isRequired,
}

export default CurrentGame
