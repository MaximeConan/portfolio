// NPM Import
import React from 'react'
import { Container, Grid, GridColumn } from 'semantic-ui-react'

// Local import
import './recipe.scss'

// Code
const Instructions = () => (
  <Container className="instructions">
    <Grid>
      <Grid.Row columns={1}>
        <GridColumn>
          <div className="instructions-details">
            <h2>Instructions</h2>
            <ol>
              <li><span>1</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
              <li><span>2</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</li>
              <li><span>3</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
              <li><span>4</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
              <li><span>5</span>Lorem ipsum dolor sit amet, consectetur adipiscing elt labore et dolore magna aliqua.</li>
              <li><span>6</span>Lorem ipsum dolor sit amet, consectetur adipisci eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
              <li><span>7</span>Lorem ipsum dolor sit etur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
            </ol>
          </div>
        </GridColumn>
      </Grid.Row>
    </Grid>
  </Container>
)


// Export
export default Instructions
