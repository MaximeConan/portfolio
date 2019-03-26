// === Initial State ===
const initialState = {
  open: false,
  isLogged: false,
  planning: [],
  dataLoaded: false,
  token: localStorage.getItem('jwtToken'),
}

// === Types ===
const SETTINGS_TOGGLE = 'SETTINGS_TOGGLE'
const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'
const REMOVE_ALL_MEAL = 'REMOVE_ALL_MEAL'
const REMOVE_MEAL = 'REMOVE_MEAL'

export const LOAD_PLANNING = 'LOAD_PLANNING'
export const RECEIVED_PLANNING = 'RECEIVED_PLANNING'

// === Reducer ===
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SETTINGS_TOGGLE:
      return {
        ...state,
        open: !state.open,
      }
    case LOGIN:
      return {
        ...state,
        isLogged: true,
        token: localStorage.getItem('jwtToken'),
      }

    case LOGOUT:
      return {
        ...state,
        isLogged: false,
        token: localStorage.removeItem('jwtToken'),
      }

    case LOAD_PLANNING:
      return {
        ...state,
        dataLoaded: false,
      }

    case RECEIVED_PLANNING:
      return {
        ...state,
        planning: action.data,
        dataLoaded: true,
      }

    case REMOVE_ALL_MEAL: {
      const emptyPlanning = Object.assign(
        {},
        Object.values(state.planning.data).map(currentDay => (
          Object.values(currentDay).map(() => (
            {
              mealTime: '',
              recipeTitle: '',
            }
          ))
        )),
      )

      return {
        ...state,
        planning: {
          status: 'ok',
          data: emptyPlanning,
        },
      }
    }

    case REMOVE_MEAL:
      console.log(action.recipeTitle, action)

      return {
        ...state,
      }

    default:
      return state
  }
}

// === Action creators ===
export const toggle = () => ({
  type: SETTINGS_TOGGLE,
})

export const login = () => ({
  type: LOGIN,
})

export const logout = () => ({
  type: LOGOUT,
})

export const loadPlanning = () => ({
  type: LOAD_PLANNING,
})

export const receivedPlanning = data => ({
  type: RECEIVED_PLANNING,
  data,
})

export const removeAllMeal = () => ({
  type: REMOVE_ALL_MEAL,
})

export const removeMeal = recipeTitle => ({
  type: REMOVE_MEAL,
  recipeTitle,
})
