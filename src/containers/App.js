import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { startNewGame } from '../actions/game'

import App from '../components/App'

const mapStateToProps = (state, ownProps) => {
  return ({
    game: state.get('game'),
    guesses: state.get('guesses'),
  })
}

const mapDispatchToProps = dispatch => bindActionCreators({
  startNewGame: () => startNewGame(),
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)
