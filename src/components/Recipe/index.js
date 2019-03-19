// NPM Import
import React from 'react'
import { Container } from 'semantic-ui-react'

// Local import
import './recipe.scss'
import HeroSectionRecipe from './HeroSectionRecipe'
import DetailsBar from './DetailsBar'
import Ingredients from './Ingredients'
import Instructions from './Instructions'
import Comments from './Comments/index'

// Code
const Recipe = () => (
  <Container>
    <HeroSectionRecipe />
    <DetailsBar />
    <Ingredients />
    <Instructions />
    <Comments />
  </Container>
)


// Export
export default Recipe
