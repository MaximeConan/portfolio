// NPM Import
import React from 'react'
import { Container } from 'semantic-ui-react'

// Local import
import './hero-section-recipe.scss'

// Code

const HeroSectionRecipe = ({ title, picture }) => {
  const divStyle = {
    backgroundImage: `url(${picture})`,
  }

  return (
    <Container fluid className="hero-section-recipe" style={divStyle}>
      <Container textAlign="center">
        <div className="hero-section-recipe-content">
          <h1>{title}</h1>
        </div>
      </Container>
    </Container>
  )
}


// Export
export default HeroSectionRecipe
