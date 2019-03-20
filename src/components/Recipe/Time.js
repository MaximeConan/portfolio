// NPM Import
import React from 'react'
import { Grid } from 'semantic-ui-react'

// Local import
import './recipe.scss'

// Code
const Time = ({ time, calories, difficulty }) => (
  <div className="time">
    <Grid>
      <Grid.Row columns={1}>
        <h2>Préparation & autres</h2>
        <div className="time-details">
          <i className="fas fa-clock" />
          <p><strong>Total :</strong> {time}</p>
        </div>
        <div className="time-details">
          <i className="fas fa-fire" />
          <p><strong>Difficulté :</strong> {difficulty} / 3</p>
        </div>
        <div className="time-details--calories">
          <i className="fas fa-weight" />
          <p><strong>Calories :</strong> {calories}</p>
        </div>
      </Grid.Row>
    </Grid>
  </div>
)


// Export
export default Time
