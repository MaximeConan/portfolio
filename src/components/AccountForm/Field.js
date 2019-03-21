/**
 * NPM import
 */
import React from 'react'
import PropTypes from 'prop-types'

/**
 * Local import
 */
import './account-form.scss'

/**
 * Code
 */

const Field = ({
  placeholder,
  name,
  value,
  type,
  onInputChange,
}) => (
  <div className="field">
    <input
      // React
      value={value}
      onChange={onInputChange}

      // DOM
      name={name}
      placeholder={placeholder}
      className="field-input"
      type={type}
    />
  </div>
)

Field.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  type: PropTypes.oneOf(['text', 'email', 'tel', 'password']),
  onInputChange: PropTypes.func.isRequired,
}
// fallback - valeurs de repli
Field.defaultProps = {
  value: '',
  type: 'text',
}

/**
 * Export
 */
export default Field
