// NPM Import
import React from 'react'
import axios from 'axios'
import algoliasearch from 'algoliasearch'
import Slider from 'react-slick'
import { Grid, GridColumn } from 'semantic-ui-react'
import { Hits, Pagination } from 'react-instantsearch-dom'

// Local import
import './recipes.scss'
import RecipeItem from './RecipeItem'
import RecipeItemSlider from './RecipeItemSlider'


// Code
class RecipesList extends React.Component {
  state = {
    recipes: [],
  }

  token = localStorage.getItem('jwtToken')

  componentDidMount() {
    axios.defaults.baseURL = ' http://aurelie-calle.vpnuser.oclock.io/Spe/Apo/foodplanner/public/api'

    axios({
      method: 'get',
      url: '/recipe',
      headers: { Authorization: `Bearer ${this.token}` },
    }).then((response) => {
      console.log('Réponse get Recipe :', response)
      this.setState({
        recipes: response.data,
      })

      const client = algoliasearch('35SA9ED0IY', '84da1b3d84081c5e3ac700fe1ecd98bc')
      const index = client.initIndex('food_planner')

      index.addObjects(this.state.recipes)
    }).catch((error) => {
      console.log(error)
    })
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
