// NPM Import
import React from 'react'
import Slider from 'react-slick'
import { Grid, GridColumn } from 'semantic-ui-react'
import { Hits, Pagination } from 'react-instantsearch-dom'

// Data import
import recipesData from 'src/data/recipes'

// Local import
import './recipes.scss'
import RecipeItem from './RecipeItem'
import RecipeItemSlider from './RecipeItemSlider'


// Code
class RecipesList extends React.Component {
  state = {
    recipes: recipesData,
  }

  render() {
    const { recipes } = this.state

    const settings = {
      className: 'center',
      centerMode: true,
      infinite: true,
      centerPadding: '60px',
      slidesToShow: 3,
      speed: 500,
    }
    return (
      <main className="content">
        <h2>Retrouves toutes nos recettes</h2>
        <Grid>
          <Grid.Row columns={3}>
            <Hits hitComponent={RecipeItem} />
          </Grid.Row>
          <Grid.Row>
            <Pagination />
          </Grid.Row>
        </Grid>
        <h2>Retrouves les 10 recettes les mieux notées</h2>
        <Grid>
          <Grid.Row columns={1}>
            <GridColumn>
              <Slider {...settings}>
                {
                recipes.map(recipe => (
                  <RecipeItemSlider
                    key={recipe.id}
                    {...recipe}
                  />
                ))
                }
              </Slider>
            </GridColumn>
          </Grid.Row>
        </Grid>
      </main>
    )
  }
}

// Export
export default RecipesList
