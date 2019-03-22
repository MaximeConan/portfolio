/**
* NPM import
*/
import React from 'react'
import { Grid, Input, Button } from 'semantic-ui-react'

/**
* Code
*/

const SectionNewsletter = () => (
  <Grid centered>
    <Grid.Column className="sectionNewsletter" textAlign="center">
      <h2 className="sectionNewsletter-title">[Brand] NEWSLETTER</h2>
      <p className="sectionNewsletter-text">Inscrivez-vous à notre Newsletter afin de recevoir les denrières recettes de saisons et nos actualités les plus fraîches !</p>
      <Grid.Row>
        <Input className="sectionNewsletter-input" placeholder="Votre adresse mail" />
        <Button className="sectionNewsletter-button">S'inscrire</Button>
      </Grid.Row>
    </Grid.Column>
  </Grid>
)
/**
* Export
*/

export default SectionNewsletter
