/**
 * NPM import
 */
import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

// Data import
import recipes from 'src/data/recipes'

/**
 * Local import
 */
import './app.scss'
import Nav from 'src/components/Nav'
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
    <Switch>
      <Route exact path="/agenda" component={Calendar} />
      <Route exact path="/recettes" component={Recipes} />
      <Route
        path="/recettes/:slug"
        render={({ match }) => {
          // { match: { params: { slug } } } : permet de destructurer l'objet match et ses enfants
          const { slug } = match.params

          const currentRecipe = recipes.find(recipe => recipe.slug === slug);

          if (currentRecipe) {
            return <Recipe recipe={currentRecipe} />
          }

          return <Redirect to="/not-found" />
        }}
      />
    </Switch>
    <Footer />
    <Copyright />
  </div>
)


/**
 * Export
 */
export default App
