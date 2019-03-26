// === Initial State ===
const initialState = {
  recipes: [],
  dataLoaded: false,
}

// === Types ===
export const LOAD_RECIPES = 'LOAD_RECIPES'
export const RECEIVED_RECIPES = 'RECEIVED_RECIPES'

// === Reducer ===
export default (state = initialState, action = {}) => {
  switch (action.type) {
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

    default:
      return state
  }
}

// === Action creators ===
export const loadRecipes = () => ({
  type: LOAD_RECIPES,
})

export const receivedRecipes = data => ({
  type: RECEIVED_RECIPES,
  data,
})
