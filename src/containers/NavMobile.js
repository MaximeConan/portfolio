// Import : npm
import { connect } from 'react-redux'

// Import : src
import NavMobile from 'src/components/Nav/NavMobile'

// action creators
import { toggle, login, logout } from 'src/store/Reducers/account'


// === State / Données ===
const mapStateToProps = state => ({
  open: state.account.open,
  isLogged: state.account.isLogged,
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
