/**
* NPM import
*/
import React from 'react'
import { Grid, Button } from 'semantic-ui-react'

/**
* Code
*/

const Section1 = () => (
  <Grid className="section1">
    <Grid.Column width={6} className="section1-right">
      <h2 className="section1-right-title">Votre planning hebdo' en quelques clics !</h2>
      <p className="section1-right-text">Vous en avez marre de ne pas savoir quoi faire pour le diner ?<br />
      Nous sommes là pour vous aider !
      </p>
      <Button className="section1-right-button">Je m'inscris</Button>
    </Grid.Column>
    <Grid.Column width={7}>
      <img className="section1-left-image" src="src/assets/Home/section-1-mockup-full.png" alt="" />
    </Grid.Column>
  </Grid>
)


/**
* Export
*/

export default Section1
