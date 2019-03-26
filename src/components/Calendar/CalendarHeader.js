// NPM import
import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from 'semantic-ui-react'
import axios from 'axios'


// Local import
import './calendar.scss'
import axiosInstance from 'src/data/axiosInstance'

// Code
class CalendarHeader extends React.Component {
  token = localStorage.getItem('jwtToken')

  handleClickInitial = () => {
    const { removeAllMeal } = this.props

    removeAllMeal()
  }

  handleClickSave = () => {
    const { planning } = this.props

    const data = {
      planning,
    }

    axiosInstance({
      method: 'post',
      url: 'api/planning/edit',
      data,
      headers: { Authorization: `Bearer ${this.token}` },
    }).then((response) => {
      console.log('Réponse post Calendar Save :', response)
    }).catch((error) => {
      console.log(error)
    })
  }

  render() {
    const { planning } = this.props

    let curr = new Date()
    let week = []

    for (let index = 1; index <= 7; index++) {
      let first = curr.getDate() - curr.getDay() + index
      let day = new Date(curr.setDate(first)).toISOString().slice(0, 10)
      week.push(day)
    }
    return (
      <Grid.Row className="calendar-header">
        <h2>
          Planning de la semaine du {week[0]} au {week[6]}   
        </h2>
        
        <div className="calendar-header-button">
          <button type="submit" onClick={this.handleClickInitial} className="calendar-header-button--initial"><i className="fas fa-plus" /> Réinitialiser</button>
          <button type="submit" onClick={this.handleClickSave} className="calendar-header-button--save"><i className="fas fa-cloud-download-alt" /> Sauvegarder</button>
        </div>
      </Grid.Row>
    )
  }
}

CalendarHeader.propTypes = {
  planning: PropTypes.object.isRequired,
}

// Export
export default CalendarHeader
