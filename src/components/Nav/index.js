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

  handleClick = () => {
    const { isLogged } = this.state

    if (isLogged) {
      this.setState({
        isLogged: false,
      })
    } else {
      this.setState({
        isLogged: true,
      })
    }
  }

  render() {
    const { activeItem } = this.state
    const { isLogged } = this.state
    return (
      <Container>
        <Menu secondary className="nav">
          <h1>[Brand]</h1>
          <Menu.Menu position="right">
            <Menu.Item
              as={NavLink}
              exact
              to="/"
              name="Accueil"
              active={activeItem === 'Accueil'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              as={NavLink}
              exact
              to="/recettes"
              name="Les recettes"
              active={activeItem === 'Les recettes'}
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
                ? (
                  <Fragment>
                    <Menu.Item
                      as={NavLink}
                      to="/mon-compte"
                      name="Mon compte"
                    >
                      <Button id="nav-button--log">Mon compte</Button>
                    </Menu.Item>
                    <Menu.Item
                      as={NavLink}
                      to="/deconnexion"
                      name="Se déconnecter"
                    >
                      <Button id="nav-button--log" onClick={this.handleClick}>Se déconnecter</Button>
                    </Menu.Item>
                  </Fragment>
                )
                : (
                  <Fragment>
                    <Menu.Item
                      as={NavLink}
                      to="/inscription"
                      name="S'inscrire"
                    >
                      <Button id="nav-button--log">S'inscrire</Button>
                    </Menu.Item>
                    <Menu.Item
                      as={NavLink}
                      to="/connexion"
                      name="Se connecter"
                    >
                      <Button id="nav-button--log" onClick={this.handleClick}>Se connecter</Button>
                    </Menu.Item>
                  </Fragment>
                )
            }
          </Menu.Menu>
        </Menu>
      </Container>
    )
  }
}

// Export
export default Nav
