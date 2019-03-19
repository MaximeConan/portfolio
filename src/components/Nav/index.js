// NPM Import
import React from 'react'
import { Menu, Button, Container } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

// Local Import
import './nav.scss'

// Code
class Nav extends React.Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Container>
        <Menu secondary className="nav">
          <h1>[Brand]</h1>
          <Menu.Menu position="right">
            <Menu.Item name="Accueil" active={activeItem === 'Accueil'} onClick={this.handleItemClick} />
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
            <Menu.Item as={NavLink} to="/agenda">
              <Button id="nav-button--calendar">Mon agenda</Button>
            </Menu.Item>
            <Menu.Item>
              <Button id="nav-button--log">Se déconnecter</Button>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Container>
    )
  }
}

// Export
export default Nav
