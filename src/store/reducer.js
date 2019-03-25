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
