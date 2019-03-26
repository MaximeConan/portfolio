/**
 * Npm import
 */
import { createStore, compose, applyMiddleware } from 'redux'

/**
 * Local import
 */
import reducer from 'src/store/Reducers'

// Middlewares
import planningMiddleware from './Middleware/planningMiddleware'
import recipesMiddleware from './Middleware/recipesMiddleware'

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// Composition des enchancers
const enhancers = composeEnhancers(
  applyMiddleware(planningMiddleware),
  applyMiddleware(recipesMiddleware),
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
