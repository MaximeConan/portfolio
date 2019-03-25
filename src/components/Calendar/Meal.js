// NPM Import
import React from 'react'
import classNames from 'classnames'

// Local import
import './calendar.scss'

// Code
const Meal = ({ currentDay }) => {
  let addClass

  switch (currentDay.recipeTitle) {
    case '':
      addClass = true
      break

    default:
      addClass = false
      break
  }

  const classCSS = classNames({
    'calendar-cell-add--meal': addClass,
  })

  return (
    <li className={`recipe ${classCSS}`}>
      <span>
        <h4>
          {currentDay.mealTime}
        </h4>
        <p className="calendar-cell-recipe">
          {currentDay.recipeTitle}
        </p>
        <div className="recipe-icon">
          <i className="fas fa-sign-out-alt" />
          <i className="fas fa-trash-alt" />
        </div>
      </span>
    </li>
  )
}

// Export
export default Meal
