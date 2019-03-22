// NPM Import
import React, { Fragment } from 'react'
import { Menu, Button, Container } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'

// Local Import
import './nav.scss'
import Logo from 'src/components/Logo'

// Code
class NavMobile extends React.Component {

  handleItemClick = (e, { name }) => {
    const { activeItem } = this.props
    this.setState({ activeItem: name })
  }

  // handleClick = () => {
  //   const { isLogged } = this.props

  //   if (isLogged) {
  //     this.setState({
  //       isLogged: false,
  //     })
  //   } else {
  //     this.setState({
  //       isLogged: true,
  //     })
  //   }
  // }

  render() {
    const { activeItem, login, logout, menuMobile, open, isLogged } = this.props

    const classCSS = classNames({
      'nav-mobile-items--open': open,
    })

    return (
      <Container className="nav nav-mobile">
        <Menu vertical>
          <div className="nav-mobile-stack">
            <h1><a href="/"><Logo /></a></h1>
            <i className="fas fa-bars nav-mobile-icon" onClick={menuMobile} />
          </div>
          <Menu.Menu className={`nav-mobile-items ${classCSS}`}>
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
              as={NavLink}
              exact
              to="/blog"
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
            <div className="nav-mobile-button">
              <Menu.Item as={NavLink} to="/agenda" className="nav-button--calendar" name="Mon agenda" />
  
              {/* Navigation changements for sign in / sign up / login state */}
  
              {
                isLogged
                  ? (
                    <Fragment>
                      <Menu.Item
                        as={NavLink}
                        to="/mon-compte"
                        name="Mon compte"
                        className="nav-button--log"
                      />
                      <Menu.Item
                        as={NavLink}
                        to="/deconnexion"
                        name="Se déconnecter"
                        className="nav-button--log"
                        onClick={logout}
                      />
                    </Fragment>
                  )
                  : (
                    <Fragment>
                      <Menu.Item
                        as={NavLink}
                        to="/inscription"
                        name="S'inscrire"
                        className="nav-button--log"
                      >
                      </Menu.Item>
                      <Menu.Item
                        as={NavLink}
                        to="/connexion"
                        name="Se connecter"
                        className="nav-button--log"
                        onClick={login}
                      />
                    </Fragment>
                  )
              }
            </div>

           
          </Menu.Menu>
        </Menu>
      </Container>
    )
  }
}

// Export
export default NavMobile
