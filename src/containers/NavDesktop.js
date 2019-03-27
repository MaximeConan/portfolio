// Import : npm
import { connect } from 'react-redux'

// Import : src
import NavDesktop from 'src/components/Nav/NavDesktop'

// action creators
import { login, logout } from 'src/store/Reducers/account'


// === State / Données ===
const mapStateToProps = state => ({
  isLogged: state.account.isLogged,
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
const NavDesktopContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavDesktop)

// Export
export default NavDesktopContainer
