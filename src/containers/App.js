// Import : npm
import { connect } from 'react-redux'

// Import : src
import App from 'src/components/App'

// action creators

// === State / Données ===
const mapStateToProps = state => ({
  isLogged: state.isLogged,
  token: state.token,
})

// === Dispatch / Actions ===
const mapDispatchToProps = {}

// Container
const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)

// Export
export default AppContainer
