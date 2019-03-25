// NPM Import
import React from 'react'
import classNames from 'classnames'

// Local import
import './calendar.scss'

// Code


class Meal extends React.Component {
  state = {
    currentDay: this.props.currentDay,
  }

  handleClickDelete = () => {
    const { currentDay } = this.state
    
    this.setState({
      currentDay: {
        mealTime: currentDay.mealTime,
        recipeTitle: '',
      },
    })
  }

  render() {
    const { currentDay } = this.state

    return (
      <li className={currentDay.recipeTitle === '' ? 'calendar-cell-add--meal' : 'recipe'}>
        <span>
          <h4>
            {currentDay.mealTime}
          </h4>
          <p className="calendar-cell-recipe">
            {currentDay.recipeTitle}
          </p>
          <div className="recipe-icon">
            <i className="fas fa-sign-out-alt" />
            <i className="fas fa-trash-alt" onClick={this.handleClickDelete} />
          </div>
        </span>
      </li>
    )
  }
}

// Export
export default Meal

 