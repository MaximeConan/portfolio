// Import : npm
import { connect } from 'react-redux'

// Import : src
import App from 'src/components/App'

// action creators

// === State / Données ===
const mapStateToProps = state => ({
  isLogged: state.account.isLogged,
  token: state.account.token,
  recipes: state.recipes.recipes,
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
