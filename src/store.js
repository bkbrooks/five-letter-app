import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers/reducer'

const middleware = [
  thunk
]

const composedEnhancers = composeWithDevTools(
  applyMiddleware(...middleware)
)

const store = createStore(
  rootReducer,
  composedEnhancers,
)

export default store
