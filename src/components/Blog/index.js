// NPM Import
import React from 'react'
import { Container, Grid } from 'semantic-ui-react'
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch, Configure } from 'react-instantsearch-dom'

// Local import
import './blog.scss'
import HeroSectionBlog from './HeroSectionBlog'
import Sidebar from './Sidebar'
import PostsList from './PostsList'

// Code
class Blog extends React.Component {
  searchClient = algoliasearch('35SA9ED0IY', '0e066917f18effc54a237822ffb04818')

  render() {
    return (
      <InstantSearch searchClient={this.searchClient} indexName="blog_food_planner">
        <Container fluid>
          <HeroSectionBlog />
          <Configure hitsPerPage={3} />
          <Grid>
            <Grid.Row>
              <Grid.Column width={4}>
                <Sidebar />
              </Grid.Column>
              <Grid.Column width={12}>
                <PostsList />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </InstantSearch>
    )
  }
}
// Export
export default Blog
