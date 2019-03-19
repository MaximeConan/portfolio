/**
 * NPM import
 */
import React from 'react'
import { Route } from 'react-router-dom'

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
    <Route path="/agenda" component={Calendar} />
    <Route path="/recettes" component={Recipes} />
    <Route path="/recette/:slug" component={Recipe} />
    <Footer />
    <Copyright />
  </div>
)


/**
 * Export
 */
export default App
