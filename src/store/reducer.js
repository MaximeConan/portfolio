// === Initial State ===
const initialState = {
  open: false,
  isLogged: false,
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
      }

    case LOGOUT:
      return {
        ...state,
        isLogged: false,
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
