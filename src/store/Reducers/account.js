// === Initial State ===
const initialState = {
  open: false,
  isLogged: false,
  dataLoaded: false,
  token: localStorage.getItem('jwtToken'),
}

// === Types ===
const SETTINGS_TOGGLE = 'SETTINGS_TOGGLE'
const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'

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
