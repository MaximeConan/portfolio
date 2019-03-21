/**
* NPM import
*/
import React from 'react'
import { Grid } from 'semantic-ui-react'

/**
* local import
*/

// Import(s) du/des component(s)
import Stars from 'src/components/Home/Sections/Stars'

const Section7 = () => (
  <Grid textAlign="center" className="section7">
    <h2 className="section7-title">Ils l'ont testé et vite adopté !</h2>
    <Grid.Column width={4} className="section7-column">
      <img className="section7-column-image" src="src/assets/Home/Section-Avis/section-avis-woman-1.jpg" alt="" />
      <Stars />
      <p className="section7-column-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et modi soluta officiis nihil laboriosam saepe, perspiciatis repudiandae vitae temporibus veritatis porro ad alias quam expedita.</p>
    </Grid.Column>
    <Grid.Column width={4} className="section7-column">
      <img className="section7-column-image" src="src/assets/Home/Section-Avis/section-avis-man-1.jpg" alt="" />
      <Stars />
      <p className="section7-column-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et modi soluta officiis nihil laboriosam saepe, perspiciatis repudiandae vitae temporibus veritatis porro ad alias quam expedita.</p>
    </Grid.Column>
    <Grid.Column width={4} className="section7-column">
      <img className="section7-column-image" src="src/assets/Home/Section-Avis/section-avis-woman-1.jpg" alt="" />
      <Stars />
      <p className="section7-column-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et modi soluta officiis nihil laboriosam saepe, perspiciatis repudiandae vitae temporibus veritatis porro ad alias quam expedita.</p>
    </Grid.Column>
  </Grid>
)


/**
* Export
*/

export default Section7
