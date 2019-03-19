// NPM Import
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Highlight } from 'react-instantsearch-dom'

// Local import
import './recipes.scss'

// Code
const RecipeItem = ({ hit }) => (
  <Link exact to={`/recettes/${hit.slug}`}>
    <div className="recipe-item">
      <img src={hit.picture} alt="img-recette" />
      <div className="recipe-item-details">
        <span className="recipe-item-calories">{hit.calorie} cal.</span>
        <div className="recipe-item-middle">
          <h3 className="recipe-item-title">
            <Highlight attribute="title" hit={hit} />
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
  </Link>
)

RecipeItem.propTypes = {
  hit: PropTypes.object.isRequired,
}


// Export
export default RecipeItem
