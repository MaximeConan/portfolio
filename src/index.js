/**
 * NPM import
 */
import '@babel/polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'

/**
 * Local import
 */
import App from 'src/containers/App'

import { loadPlanning } from 'src/store/reducer'

import store from 'src/store'

/**
 * Render
 */
// 1. Le composant racine à rendre (le tronc de l'arbre)
const rootComponent = (
  <Provider store={store}>
    <Router>
      <Route component={App} />
    </Router>
  </Provider>
)
// 2. La cible dans le DOM
const target = document.getElementById('root')

// rendu de react-dom : react VERS dom
render(rootComponent, target)

// Chargement des data
store.dispatch(loadPlanning())
