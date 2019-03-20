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
const Recipe = ({ recipe }) => (
  console.log(recipe),
  <Container>
    <div className="recipe-content">
      <HeroSectionRecipe title={recipe.title} picture={recipe.picture} />
      <DetailsBar />
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Ingredients ingredients={recipe.recipeIngredients} />
          </Grid.Column>
          <Grid.Column>
            <Time calories={recipe.calorie} time={recipe.time} difficulty={recipe.difficulty} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Instructions etapes={recipe.etapes} />
      <Comments />
    </div>
  </Container>
)

// Export
export default Recipe
