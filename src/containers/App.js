import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { startNewGame } from '../actions/game'
import { makeGuess } from '../actions/guess'

import App from '../components/App'

const mapStateToProps = (state, ownProps) => {
  return ({
    game: state.get('game'),
    guesses: state.get('guesses'),
  })
}

const mapDispatchToProps = dispatch => bindActionCreators({
  startNewGame: () => startNewGame(),
  makeGuessAction: (game, guess) => makeGuess(game, guess)
}, dispatch)

function mergeProps(stateProps, dispatchProps, ownProps) {
  const { 
    game,
  } = stateProps

  return {
    ...stateProps,
    ...dispatchProps,
    ...ownProps,
    makeGuess: (guess) => dispatchProps.makeGuessAction(game, guess),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(App)
