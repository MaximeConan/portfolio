// NPM Import
import React from 'react'
import { Container, Grid } from 'semantic-ui-react'
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch, Configure } from 'react-instantsearch-dom'

// Local import
import './recipes.scss'
import HeroSectionRecipes from './HeroSectionRecipes'
import Sidebar from './Sidebar'
import RecipesList from './RecipesList'

// Code
class Recipes extends React.Component {

  searchClient = algoliasearch('35SA9ED0IY', '0e066917f18effc54a237822ffb04818')

  render() {
    const { recipes } = this.props
    return (
      <InstantSearch searchClient={this.searchClient} indexName="food_planner">
        <Container fluid>
          <HeroSectionRecipes />
          <Configure hitsPerPage={8} />
          <Grid>
            <Grid.Row>
              <Grid.Column width={4}>
                <Sidebar />
              </Grid.Column>
              <Grid.Column width={12}>
                <RecipesList recipes={recipes} />
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
