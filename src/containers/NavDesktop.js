// Import : npm
import { connect } from 'react-redux'

// Import : src
import NavDesktop from 'src/components/Nav/NavDesktop'

// action creators
import { login, logout } from 'src/store/reducer'


// === State / Données ===
const mapStateToProps = state => ({
  isLogged: state.isLogged,
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
