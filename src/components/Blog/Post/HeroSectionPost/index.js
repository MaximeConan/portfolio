// NPM Import
import React from 'react'
import { Container } from 'semantic-ui-react'

// Local import
import './hero-section-post.scss'

// Code

const HeroSectionPost = ({ title, picture }) => {
  const divStyle = {
    backgroundImage: `url(${picture})`,
  }
  console.log(title, picture)
  return (
    <Container fluid className="hero-section-post" style={divStyle}>
      <Container textAlign="center">
        <div className="hero-section-post-content">
          <h1>{title}</h1>
        </div>
      </Container>
    </Container>
  )
}


// Export
export default HeroSectionPost
