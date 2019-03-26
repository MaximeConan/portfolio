// NPM import
import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch, Redirect } from 'react-router-dom'

// Local import
import './app.scss'

// Layout
import Nav from 'src/components/Nav'
import Footer from 'src/components/Footer'
import Copyright from 'src/components/Copyright'

import Home from 'src/components/Home'
import Calendar from 'src/containers/Calendar/Calendar'
import ShoppingList from 'src/components/ShoppingList'

import Recipes from 'src/components/Recipes'
import Recipe from 'src/components/Recipe'

import Blog from 'src/components/Blog'
import Post from 'src/components/Blog/Post'

// Import des form
import SignIn from 'src/components/AccountForm/SignIn'
import SignUp from 'src/components/AccountForm/SignUp'
import Account from 'src/components/AccountForm/Account'


// Data import
import posts from 'src/data/posts'

import PrivateRoute from './PrivateRoute'

// Code
const App = ({ recipes }) => (
  <div id="app">
    <Nav />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/agenda" component={Calendar} />
      <Route exact path="/recettes" component={Recipes} />
      <Route exact path="/blog" component={Blog} />
      <Route
        path="/recettes/:slug"
        render={({ match }) => {
          // { match: { params: { slug } } } : permet de destructurer l'objet match et ses enfants
          const { slug } = match.params

          const currentRecipe = recipes.find(recipe => recipe.slug === slug)

          if (currentRecipe) {
            return <Recipe recipe={currentRecipe} />
          }

          return <Redirect to="/not-found" />
        }}
      />
      <Route
        path="/blog/:slug"
        render={({ match }) => {
          // { match: { params: { slug } } } : permet de destructurer l'objet match et ses enfants
          const { slug } = match.params

          const currentPost = posts.find(post => post.slug === slug)

          if (currentPost) {
            return <Post post={currentPost} />
          }

          return <Redirect to="/not-found" />
        }}
      />
      <Route exact path="/shopping-list" component={ShoppingList} />
      <Route exact path="/inscription" component={SignUp} />
      <Route exact path="/connexion" component={SignIn} />
      <PrivateRoute exact path="/mon-compte" component={Account} />,
      <PrivateRoute exact path="/agenda" component={Calendar} />
      <Route exact path="/mon-compte" component={Account} />
      <Route exact path="/deconnexion" render={() => <Redirect to="/" />} />
    </Switch>
    <Footer />
    <Copyright />

  </div>
)

// Export
export default App
