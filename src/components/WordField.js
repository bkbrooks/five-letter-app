import React from 'react'
import PropTypes from 'prop-types'

const WordField = (props) => {
  return (
    <div>
      <input type="text" value='test' />
    </div>
  )
}

WordField.propTypes = {
  game: PropTypes.object.isRequired,
}

export default WordField
