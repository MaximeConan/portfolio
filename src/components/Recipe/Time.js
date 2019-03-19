// NPM Import
import React from 'react'
import { Grid } from 'semantic-ui-react'

// Local import
import './recipe.scss'

// Code
const Time = () => (
  <div className="time">
    <Grid>
      <Grid.Row columns={1}>
        <h2>Préparation & autres</h2>
        <div className="time-details">
          <i className="fas fa-clock" />
          <p><strong>Total :</strong> 25 min</p>
        </div>
        <div className="time-details">
          <i className="fas fa-user-clock" />
          <p><strong>Préparation :</strong> 15 min</p>
        </div>
        <div className="time-details">
          <i className="fas fa-fire" />
          <p><strong>Cuisson :</strong> 10 min</p>
        </div>
        <div className="time-details--calories">
          <i className="fas fa-weight" />
          <p><strong>Calories :</strong> 417</p>
        </div>
      </Grid.Row>
    </Grid>
  </div>
)


// Export
export default Time
