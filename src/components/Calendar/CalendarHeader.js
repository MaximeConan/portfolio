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
    console.log(planning)

    return (
      <Grid.Row className="calendar-header">
        <h2>Votre planning du 23/05 au 31/05</h2>
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
