
/**
 * npm import
 */
import { combineReducers } from 'redux'

/**
 * Local import
 */
import account from 'src/store/Reducers/account'
import calendar from 'src/store/Reducers/calendar'
import recipes from 'src/store/Reducers/recipes'


const reducers = combineReducers({
  account,
  calendar,
  recipes,
})

/**
 * Export
 */
export default reducers
