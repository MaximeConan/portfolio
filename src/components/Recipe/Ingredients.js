// NPM Import
import React from 'react'
import { Container, Grid, GridColumn } from 'semantic-ui-react'

// Local import
import './recipe.scss'

// Code
const Ingredients = () => (
  <Container className="ingredients">
    <Grid>
      <Grid.Row columns={2}>
        <GridColumn>
          <div className="ingredients-details">
            <h2>Ingrédients</h2>
            <ul>
              <li>2 poireaux</li>
              <li>500g de langoustines</li>
              <li>3 cuillères à café de curry</li>
              <li>1 salade au choix</li>
              <li>1 yaourt à la grec</li>
              <li>1 chou</li>
              <li>2 cuillères à soupe d'huile d'olive</li>
            </ul>
          </div>
        </GridColumn>
      </Grid.Row>
    </Grid>
  </Container>
)


// Export
export default Ingredients
