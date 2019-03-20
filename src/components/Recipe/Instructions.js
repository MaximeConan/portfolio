// NPM Import
import React from 'react'
import { Container, Grid, GridColumn } from 'semantic-ui-react'

// Local import
import './recipe.scss'

// Code
const Instructions = ({ etapes }) => (
  <Container className="instructions">
    <Grid>
      <Grid.Row columns={1}>
        <GridColumn>
          <div className="instructions-details">
            <h2>Instructions</h2>
            <ol>
              {
                etapes.map(etape => (
                  <li><span>{etape.etapeOrder}</span>{etape.description}</li>
                ))
              }
            </ol>
          </div>
        </GridColumn>
      </Grid.Row>
    </Grid>
  </Container>
)


// Export
export default Instructions
