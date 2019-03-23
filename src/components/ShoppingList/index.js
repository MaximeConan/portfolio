/**
* NPM import
*/
import React from 'react'
import { Container } from 'semantic-ui-react'
/**
* local import
*/

// Import(s) du/des component(s)
import HeroSection from 'src/components/Calendar/HeroSectionCalendar'
import ShoppingListWeb from './ShoppingListWeb'
import ShoppingListMobile from './ShoppingListMobile'
// import ShoppingListItems from 'src/components/ShoppingList/ShoppingListItems/index'

// Style SCSS
import './shoppingList.scss'

// Import Data
import data from 'src/data/recipes'


// Code
const ShoppingList = () => (
  <Container fluid>
    <HeroSection />
    <ShoppingListWeb />
    <ShoppingListMobile />
  </Container>
)

// Export
export default ShoppingList
