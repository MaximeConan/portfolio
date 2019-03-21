// NPM Import
import React from 'react'
import { Container } from 'semantic-ui-react'

// Local import
import '../blog.scss'
import HeroSectionPost from 'src/components/Blog/Post/HeroSectionPost'

const Post = ({ post }) => (
  console.log(post),
    <Container>
      <HeroSectionPost {... post} />
      <div className="post-content">
        {post.content}
      </div>
    </Container>
)

// Export
export default Post
