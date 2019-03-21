// NPM import
import React, { Fragment } from 'react'
import { Container, Grid, Button } from 'semantic-ui-react'
import Coverflow from 'react-coverflow'


// Local import
import './home.scss'


// Code
const Home = () => (
  <Fragment>
    <Container fluid>
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
      <Grid textAlign="center" className="section2">
        <h2 className="section2-title">Faites votre choix parmi 70 000 recettes.</h2>
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
          infiniteScroll={0}
          enableScroll={0}
          clickable={1}
          active={1}
        >
          <img src="src/assets/sara-dubler-648793-unsplash.jpg" alt="Recette 1" data-action="" />
          <img src="src/assets/eaters-collective-132772-unsplash.jpg" alt="Recette 2" data-action="" />
          <img src="src/assets/brenan-greene-229562-unsplash.jpg" alt="Recette 3" data-action="" />
          <img src="src/assets/brenan-greene-229562-unsplash.jpg" alt="Recette 3" data-action="" />
          <img src="src/assets/rsz_lily-banse-365344-unsplash.jpg" alt="Recette 4" data-action="" />
        </Coverflow>
      </Grid>
      <Grid textAlign="center" className="section3">
        <h2 className="section3-title">Planifiez vos recettes de la semaine.</h2>
        <img className="section3-image" src="src/assets/Home/agenda copie.png" alt="" />
      </Grid>
      <Grid className="section4">
        <h2 className="section4-title-1">Générez votre liste de courses<br /> en 1 clic !</h2>
        <h2 className="section4-title-2">Et retrouvez-là sur votre mobile !</h2>
      </Grid>
      <Grid textAlign="center" className="section5">
        <h2 className="section5-title">Cependant nous ne faisons (pas encore) les courses pour vous,<br />mais nous vous accompagnons pour la réalisation des recettes !</h2>
        <img className="section5-image" src="src/assets/Home/section-5-instructions.png" alt="" />
      </Grid>
      <Grid className="section6">
        <h2 className="section6-title">Rejoignez-nous en vous inscrivant, le meileur,<br />c'est que c'est totalement gratuit !</h2>
        <Button className="section6-button">Je m'inscris</Button>
      </Grid>
      <Grid className="section7">
        <h2 className="section7-title">Ils l'ont testé et vite adopté !</h2>
        <Grid.Column>
          <img src="" alt=""/>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et modi soluta officiis nihil laboriosam saepe, perspiciatis repudiandae vitae temporibus veritatis porro ad alias quam expedita.</p>
        </Grid.Column>
      </Grid>
      <Grid className="sectionNewsletter">
        <h2 className="sectionNewsletter-title">[Brand] NEWSLETTER</h2>
        <p>Inscrivez-vous à notre Newsletter afin de recevoir les denrières recettes de saisons et nos actualités les plus fraîches !</p>
      </Grid>
    </Container>
  </Fragment>
)
export default Home
