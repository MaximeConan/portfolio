// NPM Import
import React from 'react'
import { Container } from 'semantic-ui-react'

// Local import
import './hero-section-recipe.scss'

// Code
const divStyle = {
  backgroundImage: 'url(src/images/rsz_lily-banse-365344-unsplash.jpg)',
}

const HeroSectionRecipe = () => (
  <Container fluid className="hero-section-recipe" style={divStyle}>
    <Container textAlign="center">
      <div className="hero-section-recipe-content">
        <h1>Spaghetti à la truffe</h1>
      </div>
    </Container>
  </Container>
)


// Export
export default HeroSectionRecipe
