// NPM Import
import React from 'react'

// Local import
import './recipe.scss'

// Code
const Ingredients = ({ ingredients }) => (
  <div className="ingredients-details">
    <h2>Ingrédients</h2>
    <ul>
      {
        ingredients.map(ingredient => (
          <li>{ingredient.quantity} {ingredient.ingredient.name}</li>
        ))
      }
    </ul>
  </div>
)


// Export
export default Ingredients
