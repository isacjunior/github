import React from 'react'
import PropTypes from 'prop-types'
import TextStyled from './styled'

const Text = ({ children, bold }) => (
  <TextStyled bold={bold}>
    {children}
  </TextStyled>
)

Text.defaultProps = {
  bold: false
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
  bold: PropTypes.bool
}

export default Text
