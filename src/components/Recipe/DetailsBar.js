// NPM Import
import React from 'react'
import { Container, Grid, GridColumn } from 'semantic-ui-react'

// Local import
import './recipe.scss'

// Code
const DetailsBar = () => (
  <Container className="details-bar">
    <Grid>
      <Grid.Row columns={4}>
        <GridColumn textAlign="center">
          <div className="details-bar-note">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="far fa-star" />
            <span>4,5 / 5</span>
          </div>
        </GridColumn>
        <GridColumn textAlign="center">
          <div className="details-bar-person">
            <i className="fas fa-minus-circle" />
            <span>2 personnes</span>
            <i className="fas fa-plus-circle" />
          </div>
        </GridColumn>
        <GridColumn textAlign="center">
          <div className="details-bar-schedule">
            <i className="fas fa-calendar-alt" />
            <span>Ajouter à mon planning</span>
          </div>
        </GridColumn>
        <GridColumn textAlign="center">
          <div className="details-bar-favorite">
            <i className="fas fa-heart" />
            <span>Ajouter à mes favoris</span>
          </div>
        </GridColumn>
      </Grid.Row>
    </Grid>
  </Container>
)


// Export
export default DetailsBar
