/**
* NPM import
*/
import React from 'react'
import { Grid, Container } from 'semantic-ui-react'
/**
* local import
*/

// Import(s) du/des component(s)
import HeroSection from 'src/components/Calendar/HeroSectionCalendar'
// import ShoppingListItems from 'src/components/ShoppingList/ShoppingListItems/index'

// Style SCSS
import './shoppingList.scss'

// Import Data
import data from 'src/data/recipes'

// Code
const ShoppingList = () => (
  <Container fluid>
    <HeroSection />
    <Container>
      <Grid>
        <Grid.Row className="shoppingList">
          <Grid.Column width={3} className="shoppingList-column">
            <div className="shoppingList-theme">
              <h2 className="shoppingList-title">Légumes</h2>
              <div className="shoppingList-cell">
                <ul>
                  {/* <li><input type="checkbox" />
                    {data.recipeIngredients.map(ingredient => (
                      <ShoppingListItems
                        ingredients={ingredient}
                      />
                    ))}
                  </li> */}
                  <li><input type="checkbox" />test</li>
                  <li><input type="checkbox" />1kg de carotte</li>
                  <li><input type="checkbox" />1kg de carotte</li>
                  <li><input type="checkbox" />1kg de carotte</li>
                  <li><input type="checkbox" />1kg de carotte</li>
                </ul>
              </div>
            </div>
            <div className="shoppingList-theme">
              <h2 className="shoppingList-title">Fruits</h2>
              <div className="shoppingList-cell">
                <ul>
                  <li><input type="checkbox" />1kg de carotte</li>
                  <li><input type="checkbox" />1kg de carotte</li>
                  <li><input type="checkbox" />1kg de carotte</li>
                </ul>
              </div>
            </div>
          </Grid.Column>
          {/* <Grid.Column width={3} className="shoppingList-column">
            <div className="shoppingList-theme">
              <h2 className="shoppingList-title">Biscuits et gâteaux</h2>
              <div className="shoppingList-cell">
                <ul>
                  <li><input type="checkbox" />1kg de carotte</li>
                  <li><input type="checkbox" />1kg de carotte</li>
                  <li><input type="checkbox" />1kg de carotte</li>
                </ul>
              </div>
            </div>
            <div className="shoppingList-theme">
              <h2 className="shoppingList-title">Crémerie</h2>
              <div className="shoppingList-cell">
                <ul>
                  <li><input type="checkbox" />1kg de carotte</li>
                  <li><input type="checkbox" />1kg de carotte</li>
                  <li><input type="checkbox" />1kg de carotte</li>
                  <li><input type="checkbox" />1kg de carotte</li>
                  <li><input type="checkbox" />1kg de carotte</li>
                  <li><input type="checkbox" />1kg de carotte</li>
                  <li><input type="checkbox" />1kg de carotte</li>
                </ul>
              </div>
            </div>
          </Grid.Column>
          <Grid.Column width={3} className="shoppingList-column">
            <div className="shoppingList-theme">
              <h2 className="shoppingList-title">Viandes et poissons</h2>
              <div className="shoppingList-cell">
                <ul>
                  <li><input type="checkbox" />1kg de carotte</li>
                  <li><input type="checkbox" />1kg de carotte</li>
                  <li><input type="checkbox" />1kg de carotte</li>
                </ul>
              </div>
            </div>
            <div className="shoppingList-theme">
              <h2 className="shoppingList-title">Pâtes et riz</h2>
              <div className="shoppingList-cell">
                <ul>
                  <li><input type="checkbox" />1kg de carotte</li>
                  <li><input type="checkbox" />1kg de carotte</li>
                  <li><input type="checkbox" />1kg de carotte</li>
                  <li><input type="checkbox" />1kg de carotte</li>
                  <li><input type="checkbox" />1kg de carotte</li>
                  <li><input type="checkbox" />1kg de carotte</li>
                </ul>
              </div>
            </div>
          </Grid.Column>
          <Grid.Column width={3} className="shoppingList-column">
            <div className="shoppingList-theme">
              <h2 className="shoppingList-title">Conserves</h2>
              <div className="shoppingList-cell">
                <ul>
                  <li><input type="checkbox" />1kg de carotte</li>
                  <li><input type="checkbox" />1kg de carotte</li>
                </ul>
              </div>
            </div>
            <div className="shoppingList-theme">
              <h2 className="shoppingList-title">Condiments</h2>
              <div className="shoppingList-cell">
                <ul>
                  <li><input type="checkbox" />1kg de carotte</li>
                  <li><input type="checkbox" />1kg de carotte</li>
                  <li><input type="checkbox" />1kg de carotte</li>
                  <li><input type="checkbox" />1kg de carotte</li>
                </ul>
              </div>
            </div>
            <div className="shoppingList-theme">
              <h2 className="shoppingList-title">Boulangerie</h2>
              <div className="shoppingList-cell">
                <ul>
                  <li><input type="checkbox" />1kg de carotte</li>
                  <li><input type="checkbox" />1kg de carotte</li>
                  <li><input type="checkbox" />1kg de carotte</li>
                  <li><input type="checkbox" />1kg de carotte</li>
                  <li><input type="checkbox" />1kg de carotte</li>
                  <li><input type="checkbox" />1kg de carotte</li>
                  <li><input type="checkbox" />1kg de carotte</li>
                  <li><input type="checkbox" />1kg de carotte</li>
                  <li><input type="checkbox" />1kg de carotte</li>
                  <li><input type="checkbox" />1kg de carotte</li>
                  <li><input type="checkbox" />1kg de carotte</li>
                  <li><input type="checkbox" />1kg de carotte</li>
                  <li><input type="checkbox" />1kg de carotte</li>
                </ul>
              </div>
            </div>
          </Grid.Column>
          <Grid.Column width={3} className="shoppingList-column">
            <div className="shoppingList-theme">
              <h2 className="shoppingList-title">Petit déjeuner</h2>
              <div className="shoppingList-cell">
                <ul>
                  <li><input type="checkbox" />1kg de carotte</li>
                  <li><input type="checkbox" />1kg de carotte</li>
                </ul>
              </div>
            </div>
            <div className="shoppingList-theme">
              <h2 className="shoppingList-title">Boissons</h2>
              <div className="shoppingList-cell">
                <ul>
                  <li><input type="checkbox" />1kg de carotte</li>
                </ul>
              </div>
            </div>
            <div className="shoppingList-theme">
              <h2 className="shoppingList-title">Autres</h2>
              <div className="shoppingList-cell">
                <ul>
                  <li><input type="checkbox" />1kg de carotte</li>
                  <li><input type="checkbox" />1kg de carotte</li>
                </ul>
              </div>
            </div>
          </Grid.Column> */}
          <div>
            <a href="#" className="shoppingList-footer-button">Exportez votre liste de courses</a>
          </div>
        </Grid.Row>
      </Grid>
    </Container>
  </Container>
)

// Export
export default ShoppingList