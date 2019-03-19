// NPM import
import React from 'react'
import {
  Container,
} from 'semantic-ui-react'

// Local import
import './copyright.scss'

// Code
const Copyright = () => (
  <div className="copyright">
    <Container fluid>
      2019 FoodPlanner © - Une application dévelopée avec <i className="fas fa-heart" /> chez <a href="#">O'Clock</a>.
    </Container>
  </div>
)

// Export
export default Copyright
