/**
 * Npm import
 */
import { createStore, compose, applyMiddleware } from 'redux'

/**
 * Local import
 */
import reducer from 'src/store/reducer'

// Middlewares
import ajaxMiddleware from './ajaxMiddleware'

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// Composition des enchancers
const enhancers = composeEnhancers(
  applyMiddleware(ajaxMiddleware),
)

/**
 * Store
 */
const store = createStore(
  reducer,
  enhancers,
)

/**
 * Export
 */
export default store
