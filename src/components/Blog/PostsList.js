// NPM Import
import React from 'react'
import { Grid } from 'semantic-ui-react'
import { Hits, Pagination } from 'react-instantsearch-dom'

// Data import
import postsData from 'src/data/posts'

// Local import
import './blog.scss'
import PostItem from './PostItem'


// Code
class PostsList extends React.Component {
  state = {
    posts: postsData,
  }

  render() {
    const { posts } = this.state

    return (
      <main className="content">
        <h2>Retrouves tous nos articles</h2>
        <Grid>
          <Grid.Row columns={1}>
            <Hits hitComponent={PostItem} className="content-hits" />
          </Grid.Row>
          <Grid.Row>
            <Pagination />
          </Grid.Row>
        </Grid>
      </main>
    )
  }
}

// Export
export default PostsList
