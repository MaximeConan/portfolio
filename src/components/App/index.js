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
import Home from 'src/components/Home'
import Calendar from 'src/components/Calendar'
import ShoppingList from 'src/components/ShoppingList'
import Recipes from 'src/components/Recipes'
import Recipe from 'src/components/Recipe'
import Footer from 'src/components/Footer'
import Copyright from 'src/components/Copyright'

import data from 'src/data/recipes'

/**
 * Code
 */

const App = () => (
  <div id="app">
    <Nav />
    <Route path="/" component={Home} />
    <Route path="/agenda" component={Calendar} />
    <Route path="/recettes" component={Recipes} />
    <Route path="/shoppingList" component={ShoppingList} />
    <Route path="/single-recettes" component={Recipe} />
    <Footer />
    <Copyright />

  </div>
)


/**
 * Export
 */
export default App
