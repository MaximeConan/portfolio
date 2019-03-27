// === Initial State ===
const initialState = {
  planning: [],
  dataLoaded: false,
}

// === Types ===
const REMOVE_ALL_MEAL = 'REMOVE_ALL_MEAL'
const REMOVE_MEAL = 'REMOVE_MEAL'

export const LOAD_PLANNING = 'LOAD_PLANNING'
export const RECEIVED_PLANNING = 'RECEIVED_PLANNING'

// === Reducer ===
export default (state = initialState, action = {}) => {
  switch (action.type) {
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
      const reset = { recipeTitle: '' }

      const newState = { ...state }

      for (const currentDay in newState.planning.data) {
        newState.planning.data[currentDay] = state.planning.data[currentDay].map(dayValues => ({ ...dayValues, ...reset }))
      }

      return {
        ...state,
        data: {
          ...newState,
        },
      }
    }

    case REMOVE_MEAL:
      console.log('Action :', action)

      const currentDay = Object.keys(state.planning.data).map(currentDayKey => [currentDayKey])

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
