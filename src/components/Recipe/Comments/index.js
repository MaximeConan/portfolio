// NPM Import
import React from 'react'
import { Container, Grid } from 'semantic-ui-react'

// Local import
import './comments.scss'
import Comment from './Comment'

// Code
const Comments = () => (
  <Container className="comments">
    <Grid className="comments-grid">
      <h2>Commentaires</h2>
      <Comment />
      <Comment myself />
      <Comment />
      <Comment />
      <Comment myself />
    </Grid>
  </Container>
)


// Export
export default Comments
