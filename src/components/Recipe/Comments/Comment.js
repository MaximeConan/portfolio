// NPM Import
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Grid, GridColumn } from 'semantic-ui-react'

// Local import
import './comments.scss'

// Code
const Comments = ({ myself }) => {
  const classCss = classNames('comments-row', {
    'comments-row--own': myself,
  })

  return (
    <Grid.Row className={classCss}>
      <GridColumn width={3}>
        <div className="comments-profil">
          <div className="comments-profil-picture">1</div>
        </div>
      </GridColumn>
      <GridColumn width={13}>
        <div className="comments-content">
          <div className="comments-profil-name">John Doe</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </GridColumn>
    </Grid.Row>
  )
}

Comments.propTypes = {
  myself: PropTypes.bool.isRequired,
}

// Export
export default Comments
