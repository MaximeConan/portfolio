// Import : npm
import { connect } from 'react-redux'

// Import : src
import NavMobile from 'src/components/Nav/NavMobile'

// action creators
import { toggle, login, logout } from 'src/store/reducer'


// === State / Données ===
const mapStateToProps = state => ({
  open: state.open,
  isLogged: state.isLogged,
})

// === Dispatch / Actions ===
const mapDispatchToProps = dispatch => ({
  menuMobile: () => {
    dispatch(toggle())
  },
  login: () => {
    dispatch(login())
  },
  logout: () => {
    dispatch(logout())
  },
})

// Container
const NavMobileContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavMobile)

// Export
export default NavMobileContainer
