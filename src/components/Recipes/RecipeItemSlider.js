// NPM Import
import React from 'react'

// Local import
import './recipes.scss'

// Code
const RecipeItem = ({ title, picture, calorie }) => (
  <div className="recipe-item">
    <img src={picture} alt="img-recette" />
    <div className="recipe-item-details">
      <span className="recipe-item-calories">{calorie} cal.</span>
      <div className="recipe-item-middle">
        <h3 className="recipe-item-title">
          {title}
        </h3>
        <div className="recipe-item-note">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
        </div>
      </div>
      <div className="recipe-item-actions">
        <div className="recipe-item-actions--fav">
          <i className="fas fa-heart" />
        </div>
        <div className="recipe-item-actions--schedule">
          <i className="fas fa-calendar-alt" />
        </div>
      </div>
    </div>
  </div>
)


// Export
export default RecipeItem
