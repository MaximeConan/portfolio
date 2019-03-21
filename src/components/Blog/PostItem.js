// NPM Import
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Highlight } from 'react-instantsearch-dom'
import { Grid } from 'semantic-ui-react'

// Local import
import './blog.scss'

// Code
const PostItem = ({ hit }) => (
  <Link to={`/blog/${hit.slug}`}>
    <Grid className="post-item">
      <Grid.Row>
        <Grid.Column width={4}>
          <img src={hit.picture} alt="img-post" />
        </Grid.Column>
        <Grid.Column width={12}>
          <h3 className="post-item-title">
            <Highlight attribute="title" hit={hit} />
          </h3>
          <p className="post-item-excerpt">{hit.excerpt}</p>
          <span className="post-item-category">{hit.category}</span>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Link>
)

PostItem.propTypes = {
  hit: PropTypes.object.isRequired,
}


// Export
export default PostItem
