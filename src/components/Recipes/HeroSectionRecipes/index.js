// NPM Import
import React from 'react'
import { Container } from 'semantic-ui-react'
import { SearchBox } from 'react-instantsearch-dom'

// Local import
import './hero-section-recipes.scss'

// Code
const divStyle = {
  backgroundImage: 'url(src/assets/rsz_lily-banse-365344-unsplash.jpg)',
}

const HeroSectionRecipe = () => (
  <Container fluid className="hero-section-recipes" style={divStyle}>
    <Container textAlign="center">
      <div className="hero-section-recipes-content">
        <h1>Retrouvez ici toutes nos recettes :</h1>
        <SearchBox translations={{ placeholder: 'Recherchez votre recette' }} />
      </div>
    </Container>
  </Container>
)


// Export
export default HeroSectionRecipe
