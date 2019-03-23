// NPM import
import React from 'react'
import {
  Container,
  Grid,
  GridColumn,
  Responsive,
} from 'semantic-ui-react'

// Local import
import './footer.scss'
import Logo from 'src/components/Logo'

// Code
const Footer = () => (
  <div className="footer">
    <Container>
      <Grid>
        <Grid.Row columns={1} className="footer-logo">
          <GridColumn textAlign="center">
            <h1>
              <Logo />
            </h1>
          </GridColumn>
        </Grid.Row>
        <Responsive as={Grid} minWidth={400}>
          <Grid.Row columns={4}>
            <Grid.Column>
              <h3>FoodPlanner</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </Grid.Column>
            <Grid.Column>
              <h3>Navigation</h3>
              <ul>
                <li><a href="#">Accueil</a></li>
                <li><a href="#">Les recettes</a></li>
                <li><a href="#">Le blog</a></li>
                <li><a href="#" className="footer-button">Connexion / Inscription</a></li>
              </ul>
            </Grid.Column>
            <Grid.Column>
              <h3>Liens utiles</h3>
              <ul>
                <li><a href="#">Mentions légales</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Conditions d'utilisation</a></li>
              </ul>
            </Grid.Column>
            <Grid.Column>
              <h3>Réseaux sociaux</h3>
              <div className="footer-social-media">
                <a href="#"><i className="fab fa-instagram" /></a>
                <a href="#"><i className="fab fa-facebook-square" /></a>
                <a href="#"><i className="fab fa-twitter-square" /></a>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Responsive>
        <Responsive as={Grid} maxWidth={400}>
          <Grid.Column columns={4}>
            <Grid.Column>
              <h3>FoodPlanner</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </Grid.Column>
            <Grid.Column>
              <h3>Navigation</h3>
              <ul>
                <li><a href="#">Accueil</a></li>
                <li><a href="#">Les recettes</a></li>
                <li><a href="#">Le blog</a></li>
                <li><a href="#" className="footer-button">Connexion / Inscription</a></li>
              </ul>
            </Grid.Column>
            <Grid.Column>
              <h3>Liens utiles</h3>
              <ul>
                <li><a href="#">Mentions légales</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Conditions d'utilisation</a></li>
              </ul>
            </Grid.Column>
            <Grid.Column>
              <h3>Réseaux sociaux</h3>
              <div className="footer-social-media">
                <a href="#"><i className="fab fa-instagram" /></a>
                <a href="#"><i className="fab fa-facebook-square" /></a>
                <a href="#"><i className="fab fa-twitter-square" /></a>
              </div>
            </Grid.Column>
          </Grid.Column>
        </Responsive>
      </Grid>
    </Container>
  </div>
)

// Export
export default Footer
