// NPM import
import React from 'react'
import { Container, Grid } from 'semantic-ui-react'
import Coverflow from 'react-coverflow'


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
        <img className="test" src="src/images/Mockup - copie.png" alt="" />
      </Grid.Column>
    </Grid>
    <Grid className="section2">
      <Coverflow
        media={{
          '@media (max-width: auto)': {
            width: '100vw',
            height: '80vh',
          },
          '@media (min-width: 80vh)': {
            width: '100vw',
            height: '70vh',
          },
        }}
        displayQuantityOfSide={2}
        navigation={false}
        infiniteScroll={1}
        enableScroll={1}
        clickable={1}
        active={0}
      >
        <img src="src/images/sara-dubler-648793-unsplash.jpg" alt="Recette 1" data-action="" />
        <img src="src/images/eaters-collective-132772-unsplash.jpg" alt="Recette 2" data-action="" />
        <img src="src/images/brenan-greene-229562-unsplash.jpg" alt="Recette 3" data-action="" />
        <img src="src/images/brenan-greene-229562-unsplash.jpg" alt="Recette 3" data-action="" />
        <img src="src/images/rsz_lily-banse-365344-unsplash.jpg" alt="Recette 4" data-action="" />
      </Coverflow>
    </Grid>

  </Container>
)
export default Home
