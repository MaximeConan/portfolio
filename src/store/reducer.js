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

export const LOAD_RECIPES = 'LOAD_RECIPES'
export const RECEIVED_RECIPES = 'RECEIVED_RECIPES'

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

    case LOAD_RECIPES:
      return {
        ...state,
        dataLoaded: false,
      }

    case RECEIVED_RECIPES:
      return {
        ...state,
        recipes: action.data,
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
      console.log('Action :', action)

      const currentDay =
        Object.keys(state.planning.data)
        .map(currentDayKey => {
          return [
            currentDayKey
          ]
        })

        const mealTime = 'Repas'

      console.log('current Day :', currentDay)

      return {
        ...state,
        planning: {
          ...state.planning,
          data: {
            ...state.planning.data,
            [currentDay]: {
              ...state.planning.data[currentDay],
              [mealTime]: {
                mealTime: '',
                recipeTitle: '',
                planningId: '12',
              },
            },
          },
        },
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

export const loadRecipes = () => ({
  type: LOAD_RECIPES,
})

export const receivedRecipes = data => ({
  type: RECEIVED_RECIPES,
  data,
})

export const removeAllMeal = () => ({
  type: REMOVE_ALL_MEAL,
})

export const removeMeal = recipeTitle => ({
  type: REMOVE_MEAL,
  recipeTitle,
})
