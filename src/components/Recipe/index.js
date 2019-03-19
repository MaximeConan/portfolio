// NPM Import
import React from 'react'
import { Container, Grid } from 'semantic-ui-react'

// Local import
import './recipe.scss'
import HeroSectionRecipe from './HeroSectionRecipe'
import DetailsBar from './DetailsBar'
import Ingredients from './Ingredients'
import Time from './Time'
import Instructions from './Instructions'
import Comments from './Comments/index'

// Code
const Recipe = () => (
  <Container>
    <div className="recipe-content">
      <HeroSectionRecipe />
      <DetailsBar />
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Ingredients />
          </Grid.Column>
          <Grid.Column>
            <Time />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Instructions />
      <Comments />
    </div>
  </Container>
)


// Export
export default Recipe
