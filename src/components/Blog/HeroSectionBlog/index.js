// NPM Import
import React from 'react'
import { Container } from 'semantic-ui-react'
import { SearchBox } from 'react-instantsearch-dom'

// Local import
import './hero-section-blog.scss'

// Code
const divStyle = {
  backgroundImage: 'url(src/assets/rsz_lily-banse-365344-unsplash.jpg)',
}

const HeroSectionRecipe = () => (
  <Container fluid className="hero-section-blog" style={divStyle}>
    <Container textAlign="center">
      <div className="hero-section-blog-content">
        <h1>Recherchez votre article par mot-clé :</h1>
        <SearchBox translations={{ placeholder: 'Recherchez votre article' }} />
      </div>
    </Container>
  </Container>
)


// Export
export default HeroSectionRecipe
