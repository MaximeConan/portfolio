// NPM import
import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from 'semantic-ui-react'


// Local import
import './calendar.scss'

// Code
class CalendarHeader extends React.Component {
  state = {

  }

  handleClickInitial = () => {
    const { planning } = this.props

    const planningValue = Object.values(planning)

    planningValue.map(day => (
      day.map(currentDay => (
        console.log(currentDay)
      ))
    ))
  }

  handleClickSave = () => {
    console.log('Save')
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

// Export
export default CalendarHeader
