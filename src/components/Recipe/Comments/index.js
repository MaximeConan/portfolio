// NPM Import
import React from 'react'
import { Container, Grid, GridColumn } from 'semantic-ui-react'

// Local import
import './comments.scss'
import Comment from './Comment'

// Code
const Comments = () => (
  <Container className="comments">
    <Grid className="comments-grid">
      <Comment />
      <Comment myself />
      <Comment />
    </Grid>
  </Container>
)


// Export
export default Comments
