// NPM Import
import React from 'react'
import { Container, Grid } from 'semantic-ui-react'
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch, Configure } from 'react-instantsearch-dom'

// Local import
import './blog.scss'
import HeroSectionRecipes from './HeroSectionBlog'
import Sidebar from './Sidebar'
import PostsList from './PostsList'

// Code
class Recipes extends React.Component {
  searchClient = algoliasearch('35SA9ED0IY', '0e066917f18effc54a237822ffb04818')

  render() {
    return (
      <InstantSearch searchClient={this.searchClient} indexName="blog_food_planner">
        <Container fluid>
          <HeroSectionRecipes />
          <Configure hitsPerPage={8} />
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
export default Recipes
