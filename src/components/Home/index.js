// NPM import
import React from 'react'
import { Container, Grid } from 'semantic-ui-react'


// Local import
import './home.scss'


// Code
const Home = () => (

  <Container fluid>
    <Grid className="section1">
      <Grid.Column width={9}>
        <h2>Votre planning hebdo' en quelques clics !</h2>
        <p>Vous en avez marre de ne pas savoir quoi faire pour le diner ?<br />
        Nous sommes là pour vous aider !
        </p>
      </Grid.Column>
      <Grid.Column width={6}>
        <img className="test" src="src/images/Mockup - copie.png" alt=""/>
      </Grid.Column>
    </Grid>
    <Grid className="section2">
     
    </Grid>

  </Container>
)
export default Home
