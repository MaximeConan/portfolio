// Import : npm
import { connect } from 'react-redux'

// Import : src
import SignIn from 'src/components/AccountForm/SignIn'

// action creators
import { login, logout } from 'src/store/reducer'

// === State / Données ===
const mapStateToProps = state => ({
  isLogged: state.isLogged,
  token: state.token,
})

// === Dispatch / Actions ===
const mapDispatchToProps = dispatch => ({
  login: () => {
    dispatch(login())
  },
  logout: () => {
    dispatch(logout())
  },
})

// Container
const SignInContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignIn)

// Export
export default SignInContainer
