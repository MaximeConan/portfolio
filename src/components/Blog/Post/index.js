// NPM Import
import React from 'react'
import { Container } from 'semantic-ui-react'

// Local import
import '../blog.scss'

const Post = ({ post }) => (
  console.log(post),
    <Container>
      <div className="recipe-content">
        {post.title}
      </div>
    </Container>
)

// Export
export default Post
