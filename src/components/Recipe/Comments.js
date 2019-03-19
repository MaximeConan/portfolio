// NPM Import
import React from 'react'
import { Container, Grid, GridColumn } from 'semantic-ui-react'

// Local import
import './recipe.scss'

// Code
const Comments = () => (
  <Container className="comments">
    <Grid className="comments-grid">
      <GridColumn width={3}>
        <div className="comments-profil">
          <div className="comments-profil-picture">1</div>
          <div className="comments-profil-name">John Doe</div>
        </div>
      </GridColumn>
      <GridColumn width={13}>
        <div className="comments-content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </GridColumn>
    </Grid>
  </Container>
)


// Export
export default Comments
