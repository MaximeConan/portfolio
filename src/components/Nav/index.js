// NPM Import
import React, { Fragment } from 'react'

// Local Import
import './nav.scss'
import NavDesktop from './NavDesktop'
import NavMobile from './NavMobile'

// Code
class Nav extends React.Component {
  state = {
    activeItem: 'home',
    isLogged: true,
  }

  render() {
    const { isLogged, activeItem } = this.state

    return (
      <Fragment>
        <NavDesktop isLogged={isLogged} activeItem={activeItem} />
        <NavMobile isLogged={isLogged} activeItem={activeItem} />
      </Fragment>
    )
  }
}

// Export
export default Nav
