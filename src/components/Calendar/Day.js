// NPM import
import React from 'react'
import PropTypes from 'prop-types'


// Local import
import './calendar.scss'

// Code
const Day = ({ day }) => (
  <li>{day}</li>
)

Day.propTypes = {
  day: PropTypes.string.isRequired,
}

// Export
export default Day
