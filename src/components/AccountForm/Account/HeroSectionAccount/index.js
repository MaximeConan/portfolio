// NPM Import
import React from 'react'
import { Container } from 'semantic-ui-react'

// Local import
import './hero-section-account.scss'

// Code
const divStyle = {
  backgroundImage: 'url(src/images/rsz_lily-banse-365344-unsplash.jpg)',
}

const HeroSectionAccount = () => (
  <Container fluid className="hero-section-account" style={divStyle}>
    <Container textAlign="center">
      <div className="hero-section-account-content">
        <h1>Gérez vos recettes de la semaine en quelques clics !</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </Container>
  </Container>
)


// Export
export default HeroSectionAccount