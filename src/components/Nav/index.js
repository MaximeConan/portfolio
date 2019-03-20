// NPM Import
import React, { Fragment } from 'react'
import { Menu, Button, Container } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

// Local Import
import './nav.scss'

// Code
class Nav extends React.Component {
  state = {
    activeItem: 'home',
    isLogged: true,
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    const { isLogged } = this.state
    return (
      <Container>
        <Menu secondary className="nav">
          <h1>[Brand]</h1>
          <Menu.Menu position="right">
            <Menu.Item as={NavLink} exact to="/" name="Accueil" active={activeItem === 'Accueil'} onClick={this.handleItemClick} />
            <Menu.Item
              as={NavLink}
              exact
              to="/recettes"
              name="Les recettes"
              active={activeItem === 'Les recettes'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              as={NavLink}
              to="/single-recettes"
              name="Une recette"
              active={activeItem === 'Une recette'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="Le blog"
              active={activeItem === 'Le blog'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              as={NavLink}
              to="/shopping-list"
              name="Ma liste de courses"
              active={activeItem === 'Ma Liste De Courses'}
              onClick={this.handleItemClick}
            />
            <Menu.Item as={NavLink} to="/agenda">
              <Button id="nav-button--calendar">Mon agenda</Button>
            </Menu.Item>

            {/* Navigation changements for sign in / sign up / login state */}

            {
              isLogged
                ? <Fragment>
                    <Menu.Item>
                        <Button id="nav-button--log">Mon compte</Button>
                      </Menu.Item>
                      <Menu.Item>
                        <Button id="nav-button--log">Se déconnecter</Button>
                    </Menu.Item>
                  </Fragment>
                : <Fragment>
                    <Menu.Item>
                        <Button id="nav-button--log">Se connecter</Button>
                      </Menu.Item>
                      <Menu.Item>
                        <Button id="nav-button--log">S'inscrire</Button>
                      </Menu.Item>
                </Fragment>
            }

           
          </Menu.Menu>
        </Menu>
      </Container>
    )
  }
}

// Export
export default Nav
