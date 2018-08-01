import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import App from './containers/App'

import registerServiceWorker from './registerServiceWorker'

const target = document.querySelector('#root')

render(
  <Provider store={store}>
    <Router>
      <div className="five-letter-app">
        <Route exact path="/" component={App}/>
      </div>
    </Router>
  </Provider>,
  target
)

registerServiceWorker()
