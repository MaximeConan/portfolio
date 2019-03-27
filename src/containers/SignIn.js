// Import : npm
import { connect } from 'react-redux'

// Import : src
import SignIn from 'src/components/AccountForm/SignIn'

// action creators
import { login, logout } from 'src/store/Reducers/account'

// === State / Données ===
const mapStateToProps = state => ({
  isLogged: state.account.isLogged,
  token: state.account.token,
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
