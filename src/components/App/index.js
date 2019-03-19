/**
 * NPM import
 */
import React from 'react'
import { Route, Switch } from 'react-router-dom'

// Data import
import recipesData from 'src/data/recipes'

/**
 * Local import
 */
import './app.scss'
import Nav from 'src/components/Nav'
import Calendar from 'src/components/Calendar'
import Recipes from 'src/components/Recipes'
import Recipe from 'src/components/Recipe'
import Footer from 'src/components/Footer'
import Copyright from 'src/components/Copyright'

/**
 * Code
 */

const App = () => (
  <div id="app">
    <Nav />
    <Switch>
      <Route exact path="/agenda" component={Calendar} />
      <Route exact path="/recettes" component={Recipes} />
      <Route exact path="/recettes/:slug" render={() => <Recipe recipes={recipesData} />} />
    </Switch>
    <Footer />
    <Copyright />
  </div>
)


/**
 * Export
 */
export default App
