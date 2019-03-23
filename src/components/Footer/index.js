// NPM import
import React from 'react'
import {
  Container,
  Grid,
  GridColumn,
} from 'semantic-ui-react'

// Local import
import './footer.scss'
import Logo from 'src/components/Logo'
import FooterMobile from './FooterMobile'
import FooterWeb from './FooterWeb'

// Code
const Footer = () => (
  <div className="footer">
    <Container>
      <Grid>
        <Grid.Row columns={1} className="footer-logo">
          <GridColumn textAlign="center">
            <h1>
              <Logo />
            </h1>
          </GridColumn>
        </Grid.Row>
        <FooterWeb />
        <FooterMobile />
      </Grid>
    </Container>
  </div>
)

// Export
export default Footer
